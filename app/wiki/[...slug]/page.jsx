import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkToc from "remark-toc";

import Header from "./header";
import { fetchWikiDetails } from "./actions";

const components = {
  h1: (props) => (
    <h1
      className="[&:not(:first-child)]:mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="[&:not(:first-child)]:mt-8 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="[&:not(:first-child)]:mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="[&:not(:first-child)]:mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  table: (props) => {
    return (
      <div className="my-6 w-full overflow-y-auto">
        <table>
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              {props.children[0].props.children.props.children.map(
                (heading, index) => (
                  <th
                    key={`heading-${index}`}
                    className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                  >
                    {heading.props.children}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {props.children[1].props.children.map((row, rowIndex) => (
              <tr
                key={`row-${rowIndex}`}
                className="m-0 border-t p-0 even:bg-muted"
              >
                {row.props.children.map((item, itemIndex) => (
                  <td
                    key={`item-${rowIndex}-${itemIndex}`}
                    className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                  >
                    {item.props.children}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

const getFormattedSlug = (slugArray) => {
  let formattedSlug = "";
  slugArray.forEach((value) => (formattedSlug = `${formattedSlug}/${value}`));
  return formattedSlug;
};

export default async function WikiPage({ params }) {
  const slug = (await params).slug;
  const pageData = await fetchWikiDetails(getFormattedSlug(slug));

  return (
    <div className="px-8 py-4">
      <Header title={pageData.title} id={pageData.id} />
      <MDXRemote
        source={pageData.contents}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkToc],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          },
        }}
      />
    </div>
  );
}
