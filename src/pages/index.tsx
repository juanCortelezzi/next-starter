import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import { ThemeChanger } from "@/components/themeSwitch";

const Home: NextPage = () => {
  return (
    <Layout
      title="Frontend Template"
      desc="Simple Frontend template, just Ctrl + c and Ctrl + v"
      className="prose prose-lg prose-h1:my-8 mx-auto"
    >
      <h1>Next + TS + Tailwind + DaisyUI</h1>
      <h2>Theme changing</h2>
      <ThemeChanger />
      <h2>Decision making</h2>
      <p>
        I created this starter because from now on I&apos;m probably going to
        use Tailwind + Daisyui for all my frontend projects. Tailwind makes
        writing css less painful and Daisyui is a fully featured UI library
        without the jargon and custom props that other UI libraries offer. In my
        opinion this is the easiest and quickest way to get a frontend project
        up and running.
      </p>
      <p>Warning, dummy text ahead...</p>
      <p>
        By default, Tailwind removes all of the default browser styling from
        paragraphs, headings, lists and more. This ends up being really useful
        for building application UIs because you spend less time undoing
        user-agent styles, but when you really are just trying to style some
        content that came from a rich-text editor in a CMS or a markdown file,
        it can be surprising and unintuitive.
      </p>
      <h2>More Dummy text but in a header</h2>
      <p>
        What follows from here is just a bunch of absolute nonsense I’ve written
        to dogfood the plugin itself. It includes every sensible typographic
        element I could think of, like bold text, unordered lists, ordered
        lists, code blocks, block quotes, and even italics.
      </p>
      <p>
        I would have loved to write this text, unfortunately, it is a copy paste
        form the Daisy ui docs
      </p>
    </Layout>
  );
};

export default Home;
