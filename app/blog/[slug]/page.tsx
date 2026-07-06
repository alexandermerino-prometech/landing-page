import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

// Genera las rutas estáticas en build time (SSG)
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
      },
    };
  } catch {
    return { title: "Artículo no encontrado" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F3EE] py-24">
      <article className="max-w-3xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#E76F51]">
          {post.categoria}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight mt-3 mb-5">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#7C8794] mb-10 pb-10 border-b border-[#E4DDD4]">
          <span>{post.autor}</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <div
          className="prose prose-lg max-w-none text-[#16324F] prose-headings:text-[#16324F] prose-a:text-[#16324F] prose-strong:text-[#16324F]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}