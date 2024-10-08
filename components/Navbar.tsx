"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, Button } from "pixel-retroui";

export default function Navbar() {
  return (
    <Card
      bg="#fff"
      textColor="black"
      borderColor="black"
      shadowColor="#fcd34d"
      className="w-[90vw] text-center fixed top-5 z-30"
    >
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <Image
            className="mr-2 apect-square h-10 w-10"
            alt="logo"
            src="/emojigg/flame.gif"
            width={1000}
            height={1000}
          />
        </Link>
        <div>
          <Link target="_blank" href="//github.com/ArnavK-09/chapters_as_tasks">
            <Button
              bg="#fcd34d"
              textColor="black"
              shadow="black"
              borderColor="black"
              className="flex align-middle"
            >
              <Image
                unoptimized
                alt="star"
                width={24}
                height={24}
                src="/emojigg/bow.gif"
                className="mr-2 apect-square h-6 w-6"
              />
              Give A Star!
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
