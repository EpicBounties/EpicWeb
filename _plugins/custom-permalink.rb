# Based on http://stackoverflow.com/a/17206081/1412255
module Jekyll
    class PermalinkRewriter < Generator
        safe true
        priority :low

        def generate(site)
            site.posts.docs.each do |item|
                item.data['permalink'] = '/' + item.lang + '/blog/' + item.slug
            end
        end
    end
end