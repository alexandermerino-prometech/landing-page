import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre gestión de proyectos, compras y control de costos para constructoras, empresas de ingeniería, consultoras y empresas de servicios.",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
  <>
    <main className="min-h-screen bg-[#F7F3EE] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">
            Recursos
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight mb-5">
            Blog de Prometech
          </h1>
          <p className="text-[#5E6B7A] text-lg leading-relaxed">
            Ideas prácticas sobre gestión de proyectos, control de costos y digitalización operativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-3xl border border-[#E4DDD4] bg-[#FFFDF9] p-8 hover:shadow-md hover:border-[#16324F]/20 transition-all duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#E76F51]">
                {post.categoria}
              </span>
              <h2 className="text-xl font-bold text-[#16324F] mt-3 mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-[#5E6B7A] leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-[#7C8794]">
                <span>{new Date(post.date).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}