# Based on http://stackoverflow.com/a/17206081/1412255
module Jekyll
    class PermalinkRewriter < Generator
        safe true
        priority :low

        def generate(site)
            # Until Jekyll allows me to use :slug, I have to resort to this
            site.posts.docs.each do |item|
                item.data['permalink'] = '/' + item.lang + '/blog/' + item.slug
            end
        end
    end
end