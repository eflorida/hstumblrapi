import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        search: function() {
            var tumblrUrlBase = 'https://api.tumblr.com/v2/blog/';
            var tabParams = this.get('tagSearch') ? '?tag=' + this.get('tagSearch') : '';
            var self = this;

            $.ajax({
                type: 'GET',
                url : tumblrUrlBase + this.get('blogSearch') + '.tumblr.com/posts' + tabParams,
                dataType: 'jsonp',
                data: {
                    api_key : 'NDz2IGvmHx0zJVeKiCznoVwcq4ge8u1mHlmLphdZG0QZDA4kOx'
                },
                fail: function( err ){
                    self.set( 'noResults', true );
                    self.set( 'tumblrFeed', tumblrFeed );
                    console.log('Tumblr api call failed :: ', err );
                },
                success: function( data ){
                    var tumblrFeed = data.response;
                    console.log('Got search results: ', tumblrFeed);

                    if ( tumblrFeed.posts.length == 0 ) {
                        self.set( 'noResults', true );
                        self.set( 'tumblrFeed', tumblrFeed );
                    } else {
                        self.set( 'noResults', false );

                        for(var i = 0; i < tumblrFeed.posts.length; i++){
                            if ( tumblrFeed.posts[i].type == 'text' ) {
                                tumblrFeed.posts[i].displaySummary = tumblrFeed.posts[i].body;
                            } else if ( tumblrFeed.posts[i].type == 'link' ) {
                                tumblrFeed.posts[i].displaySummary = tumblrFeed.posts[i].url;
                                tumblrFeed.posts[i].typeLink = true;
                            } else if ( tumblrFeed.posts[i].type == 'photo' ) {
                                tumblrFeed.posts[i].displaySummary = '<img src="' + tumblrFeed.posts[i].photos[0].original_size.url + '" alt="" />';
                            } else {
                                //Would repeat custom field for each post type...
                                //Per the api documentation there are 8 types of posts
                                //https://www.tumblr.com/docs/en/api/v2#blog_methods
                                //The point here is a custom field is added for the main summary to display, which varies depending on the post type
                                tumblrFeed.posts[i].displaySummary = tumblrFeed.posts[i].summary;
                            }
                        }
                        
                        Object.assign( tumblrFeed, {'blog': data.response.blog} );
                        self.set( 'tumblrFeed', tumblrFeed );
                    }
                },
            });
        },

        addToFavorites: function( postId ) {
            var tumblrFeed = this.get( 'tumblrFeed' );

            for(var i = 0; i < tumblrFeed.posts.length; i++){
                if ( tumblrFeed.posts[i].id == postId ) {
                    if ( this.get( 'favorites' ) ){
                        this.get( 'favorites' ).pushObject( {'post': tumblrFeed.posts[i], 'blog': tumblrFeed.blog} );
                    } else {
                        this.set( 'favorites', [{'post': tumblrFeed.posts[i], 'blog': tumblrFeed.blog}] );
                    }
                }
            }
        },

        removeFromFavorites: function( favId ) {
            var favorites = this.get( 'favorites' ) || [];

            var post = this.get( 'favorites' ).findBy('post.id', favId);
            this.get( 'favorites' ).removeObject( post );
        }
    }
});
