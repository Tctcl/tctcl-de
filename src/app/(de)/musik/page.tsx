import { MusicPage } from "@/components/music-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("de", "music");

export default function GermanMusicPage() {
  return <MusicPage locale="de" />;
}
