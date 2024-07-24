import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ReactPlayer from "react-player";

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer items-center gap-4 pb-2 xl:pb-0">
          <button className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-50 shadow-2xl shadow-accent">
            <Image
              src="/assets/home/play.svg"
              width={33}
              height={33}
              alt="logo-video"
            />
          </button>

          <span className="font-primary text-lg">Assistir Vídeo</span>
        </div>
      </DialogTrigger>

      <DialogContent>
        <ReactPlayer
          height={"100%"}
          width={"100%"}
          controls
          playing
          // url="https://www.youtube.com/watch?v=5VvEe0nlx9w"
          url="/assets/home-video.mp4"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
