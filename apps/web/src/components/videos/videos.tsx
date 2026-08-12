import { IFrame } from "@/components/shared/iframe";
import { getYoutubeEmbedURL } from "@/lib/utils";
import type { YoutubeVideo, YoutubeVideos } from "@/types/academia-page-data";

function normalizeVideos(videos: YoutubeVideo[]) {
  return videos.map((video) => ({
    videoURL: getYoutubeEmbedURL(video.videoURL),
    title: video.title,
  }));
}

export function Videos({ youtube }: { youtube: YoutubeVideos }) {
  const groups = Object.entries(youtube).map(([group, items]) => ({
    group,
    videos: normalizeVideos(items),
  }));

  return (
    <section className="!py-[clamp(4rem,8vw,6.5rem)]">
      <div className="contenedor revelar">
        <div className="mb-12 text-center [&_h2]:mx-auto [&_.intro-seccion]:mx-auto">
          <span className="eyebrow">Contenido</span>
          <h2 className="max-w-none">Videos de la academia</h2>
          <p className="intro-seccion">
            Reproduce las sesiones y materiales audiovisuales del periodo
            activo.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          {groups.map(({ group, videos }) => (
            <div key={group} className="text-center">
              <span className="eyebrow !text-sm mx-auto justify-center">
                {group}
              </span>

              {videos.length === 0 ? (
                <p className="intro-seccion mx-auto mt-2">
                  Próximamente disponible...
                </p>
              ) : (
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {videos.map((video) => (
                    <div
                      key={video.title}
                      className="aspect-video w-full overflow-hidden rounded-[10px] border border-[rgba(31,58,38,0.14)] bg-white shadow-[0_18px_48px_rgba(13,15,14,0.1)]"
                    >
                      <IFrame
                        src={video.videoURL as string}
                        title={video.title}
                        className="h-full"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
