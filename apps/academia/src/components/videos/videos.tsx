import { IFrame } from "@/components/shared/iframe";
import { getYoutubeEmbedURL } from "@/lib/utils";
import { YoutubeVideo } from "@/types/academia-page-data";

export function Videos({ youtube }: { youtube: YoutubeVideo[] }) {
  const videos = youtube.map((video) => ({
    videoURL: getYoutubeEmbedURL(video.videoURL),
    title: video.title,
  }));

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
            <div key={video.title} className="aspect-video w-full">
              <IFrame src={video.videoURL as string} title={video.title} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
