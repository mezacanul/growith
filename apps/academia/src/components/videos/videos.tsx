import { IFrame } from "@/components/shared/iframe";

const YOUTUBE_EMBED =
  "https://www.youtube.com/embed/djV11Xbc914?list=RDdjV11Xbc914";

const videos = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: YOUTUBE_EMBED,
  title: `Video ${i + 1}`,
}));

export function Videos() {
  return (
    <section className="!py-[clamp(4rem,8vw,6.5rem)]">
      <div className="contenedor revelar">
        <div className="mb-10 text-center">
          <span className="eyebrow">Contenido</span>
          <h2 className="mx-auto max-w-none">Videos de la academia</h2>
          <p className="intro-seccion mx-auto">
            Reproduce las sesiones y materiales audiovisuales del periodo
            activo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video w-full">
              <IFrame src={video.src} title={video.title} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
