import { MusicPage } from "@/components/music-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("en", "music");

export default function EnglishMusicPage() {
  return <MusicPage locale="en" />;
}
