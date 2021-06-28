# generate template for tags index

module Jekyll
  class TagIndex < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag_index.html')
      self.data['tag'] = tag
   end
  end
  class TagGenerator < Generator
    safe true
    def generate(site)
      langs = ['es', 'en']
      if site.layouts.key? 'tag_index'
        site.tags.keys.each do |tag|
          langs.each do |lang|
            dir = "/tags"
            write_tag_index(site, File.join(lang, dir, tag), tag)
          end
        end
      end
    end
    def write_tag_index(site, dir, tag)
      index = TagIndex.new(site, site.source, dir, tag)
      index.render(site.layouts, site.site_payload)
      index.write(site.dest)
      site.pages << index
    end
  end
end
