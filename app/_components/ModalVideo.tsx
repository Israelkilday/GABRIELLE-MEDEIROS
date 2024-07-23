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
        {/* <video width="100%" height="100%" controls>
          <source src="/assets/video-home.mp4" type="video/mp4" />
        </video> */}

        <ReactPlayer
          height={"100%"}
          width={"100%"}
          controls
          playing
          // url="hhtp://youtube.com/watch?v=Er5a7snyQKM"
          url="assets/videoHome.mp4"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
