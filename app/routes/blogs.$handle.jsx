import {useParams, useLocation, useLoaderData} from '@remix-run/react';
import invariant from 'tiny-invariant';
import {Image} from '@shopify/hydrogen';
import Container from '~/components/container';
import {ARTICLE_QUERY} from '~/lib/fragments';
import {json} from '@shopify/remix-oxygen';

const BLOG_HANDLE = 'news';

export async function loader({request, params, context}) {
  const {language, country} = context.storefront.i18n;

  invariant(params.handle, 'Missing news handle');

  const {blog} = await context.storefront.query(ARTICLE_QUERY, {
    variables: {
      blogHandle: BLOG_HANDLE,
      articleHandle: params.handle,
      language,
    },
  });

  if (!blog?.articleByHandle) {
    throw new Response(null, {status: 404});
  }

  const article = blog.articleByHandle;

  const formattedDate = new Intl.DateTimeFormat(`${language}-${country}`, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article?.publishedAt));

  // const seo = seoPayload.article({article, url: request.url});

  return json({article, formattedDate});
}

function Blog() {
  const params = useParams();
  const {article, formattedDate} = useLoaderData();

  const {title, image, contentHtml, author} = article;

  console.log(article, 'article');

  return (
    <Container>
      <div className="mt-40 mb-10 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {title}
          </h2>
          <a
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            {BLOG_HANDLE}
          </a>
        </div>

        {image && (
          <Image
            data={image}
            className="w-full mx-auto mt-8 md:mt-16 rounded-[40px]"
            sizes="90vw"
            loading="eager"
          />
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full">
          <div
            dangerouslySetInnerHTML={{__html: contentHtml}}
            className="article"
          />
        </div>

        <div className="mb-40 w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">
                  {author.name}
                </p>
                <p className="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Blog;
