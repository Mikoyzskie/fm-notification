import Image from "next/image";
import clsx from "clsx";

interface INotification {
  unread: boolean;
  image: string;
  name: string;
  time: string;
  post?: string;
  action: string;
  isClub: boolean;
}

const notifications: INotification[] = [
  { unread: true, image: "/avatar-mark-webber.webp", name: "Mark Webber", time: "1m", post: "My first tournament today!", action: "reacted to your recent post", isClub: false },
  { unread: true, image: "/avatar-angela-gray.webp", name: "Angela Gray", time: "5m", action: "followed you", isClub: false },
  { unread: true, image: "/avatar-jacob-thompson", name: "Jacob Thompson", time: "1 day", action: "avatar-jacob-thompson", isClub: true },
]

export default function Home() {
  return (
    <main className="min-h-screen h-full flex items-center justify-center">
      <div className="max-w-[730px] w-full rounded-[15px] px-[30px] bg-white pt-[33px]">
        <div className="flex items-center justify-between mb-[31px]">
          <div className="flex items-center gap-[11px]">
            <h2 className="text-[#1C202B] text-2xl font-extrabold">Notification</h2>
            <span className="font-extrabold h-[25px] w-[35px] flex items-center justify-center text-white bg-[#0A327B] rounded-md">3</span>
          </div>
          <p className="text-[#5E6778]">Mark all as read</p>
        </div>
        <div className="flex flex-col gap-2">
          <Unread unread={true} image="/avatar-mark-webber.webp" name="Mark Webber" time="1m" post="My first tournament today!" action="reacted to your recent post" isClub={false} />
          <Unread unread={true} image="/avatar-angela-gray.webp" name="Angela Gray" time="5m" action="followed you" isClub={false} />
          <Unread unread={true} image="/avatar-angela-gray.webp" name="Angela Gray" time="5m" action="followed you" isClub={true} post="Chess Club" />
          {
            notifications.map((notif: INotification, index: number) => {
              return (
                
              )
            })
          }
        </div>
      </div>
    </main>
  );
}


function Unread({ unread, image, name, time, post, action, isClub }: INotification) {
  return (
    <div className={clsx("py-[18px] px-5 rounded-lg flex items-center gap-5",
      unread ? "bg-[#F7FAFD]" : ""
    )}>
      <Image
        src={image}
        alt="mark webber"
        height={90}
        width={90}
        className="h-[45px] w-[45px]"
      />
      <div >
        <div className="flex gap-[6px] items-center">
          <p className="flex gap-[7px]">
            <span className="text-[#1C202B] font-extrabold">{name}</span> <span className="text-[#5E6778]">{action}</span> <span className={clsx(" font-extrabold", post ? "" : "hidden", isClub ? "text-[#0A327B]" : "text-[#5E6778]")}>{post}</span>
          </p>
          <svg className={clsx("", unread ? "" : "hidden")} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#F65552" />
          </svg>

        </div>
        <p className="text-[#5E6778]">{time} ago</p>
      </div>
    </div>
  )
}