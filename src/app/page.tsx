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
  isProfile: boolean;
  isMessage: boolean;
}

const notifications: INotification[] = [
  { unread: true, image: "/avatar-mark-webber.webp", name: "Mark Webber", time: "1m", post: "My first tournament today!", action: "reacted to your recent post", isClub: false, isProfile: false, isMessage: false },
  { unread: true, image: "/avatar-angela-gray.webp", name: "Angela Gray", time: "5m", post: undefined, action: "followed you", isClub: false, isProfile: false, isMessage: false },
  { unread: true, image: "/avatar-jacob-thompson.webp", name: "Jacob Thompson", time: "1 day", post: "Chess Club", action: "has joined your group", isClub: true, isProfile: false, isMessage: false },

]

const bottom: INotification[] = [
  { unread: false, image: "/avatar-rizky-hasanuddin.webp", name: "Rizky Hasanuddin", time: "5 days", post: undefined, action: "sent you a private message", isClub: false, isProfile: false, isMessage: true },
  { unread: false, image: "/avatar-kimberly-smith.webp", name: "Kimberly Smith", time: "1 week", post: undefined, action: "commented on your picture", isClub: false, isProfile: true, isMessage: false },
  { unread: false, image: "/avatar-nathan-peterson.webp", name: "Nathan Peterson", time: "2 weeks", post: "5 end-game strategies to increase your win rate", action: "reacted to your recent post", isClub: false, isProfile: false, isMessage: false },
  { unread: false, image: "/avatar-anna-kim.webp", name: "Anna Kim", time: "2 weeks", post: "Chess Club", action: "left the group", isClub: true, isProfile: false, isMessage: false },
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

          {
            notifications.map((notif: INotification, index: number) => {
              return (
                <Unread key={index} unread={notif.unread} image={notif.image} name={notif.name} time={notif.time} post={notif.post} action={notif.action} isClub={notif.isClub} isProfile={notif.isProfile} isMessage={notif.isMessage} />
              )
            })
          }
          {
            bottom.map((notif: INotification, index: number) => {
              return (
                <Unread key={index} unread={notif.unread} image={notif.image} name={notif.name} time={notif.time} post={notif.post} action={notif.action} isClub={notif.isClub} isProfile={notif.isProfile} isMessage={notif.isMessage} />
              )
            })
          }
        </div>
      </div>
    </main>
  );
}


function Unread({ unread, image, name, time, post, action, isClub, isProfile, isMessage }: INotification) {
  return (
    <div className={clsx("py-[18px] px-5 rounded-lg flex items-start gap-5",
      unread ? "bg-[#F7FAFD]" : ""
    )}>
      <Image
        src={image}
        alt="mark webber"
        height={90}
        width={90}
        className="h-[45px] w-[45px]"
      />
      <div className="flex flex-col gap-[13px] w-full">
        <div>
          <div className="flex justify-between w-full">
            <div className="flex gap-[6px] items-center">
              <p>
                <span className="text-[#1C202B] font-extrabold">{name}</span>&nbsp;&nbsp;<span className="text-[#5E6778]">{action}</span>&nbsp;&nbsp;<span className={clsx(" font-extrabold", post ? "" : "hidden", isClub ? "text-[#0A327B]" : "text-[#5E6778]")}>{post}</span>
              </p>
              <svg className={clsx("", unread ? "" : "hidden")} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#F65552" />
              </svg>

            </div>
            {
              isProfile &&
              <Image
                src={"/image-chess.webp"}
                alt="profile"
                width={90}
                height={90}
                className="h-[45px] w-[45px] rounded-[7px]"
              />
            }
          </div>
          <p className="text-[#5E6778]">{time} ago</p>
        </div>
        {
          isMessage &&
          <div className="p-5 border rounded-[5px] text-[#5E6778]">
            Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.
          </div>
        }
      </div>
    </div>
  )
}