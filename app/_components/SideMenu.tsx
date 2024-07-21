"use client";

import Link from "next/link";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { HomeIcon } from "lucide-react";

const SideMenu = () => {
  return (
    <>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex justify-between pt-6">
        <div className="flex items-center">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                width={65}
                height={0}
                src="/logo.svg"
                alt="icon-logo"
                style={{
                  objectFit: "contain",
                  // transform: "translateY(-10px)",
                }}
              />

              <h1 className="font-great-vibes-regular absolute left-20 text-lg text-primary">
                Gabrielle Medeiros
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-6">
        <Separator />
      </div>

      <div className="space-y-1">
        <Button
          className="w-full justify-start space-x-3 rounded-full bg-transparent text-sm text-foreground hover:bg-primary hover:text-white"
          asChild
        >
          <Link href="/">
            <HomeIcon size={16} />
            <span className="block">Início</span>
          </Link>
        </Button>

        <Button
          className="w-full justify-start space-x-3 rounded-full bg-transparent text-sm text-foreground hover:bg-primary hover:text-white"
          asChild
        >
          <Link href="/">
            <HomeIcon size={16} />
            <span className="block">Início</span>
          </Link>
        </Button>

        <Button
          className="w-full justify-start space-x-3 rounded-full bg-transparent text-sm text-foreground hover:bg-primary hover:text-white"
          asChild
        >
          <Link href="/">
            <HomeIcon size={16} />
            <span className="block">Início</span>
          </Link>
        </Button>

        <Button
          className="w-full justify-start space-x-3 rounded-full bg-transparent text-sm text-foreground hover:bg-primary hover:text-white"
          asChild
        >
          <Link href="/">
            <HomeIcon size={16} />
            <span className="block">Início</span>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default SideMenu;
