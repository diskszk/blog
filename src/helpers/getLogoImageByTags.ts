import { siteConfig } from "@/siteConfig";
import apple from "@/assets/logo/apple-logo.png";
import astro from "@/assets/logo/astro-logo.png";
import aws from "@/assets/logo/AWS-Cloud-logo_32.svg";
import css from "@/assets/logo/css-logo.png";
import docker from "@/assets/logo/docker-mark-blue.svg";
import js from "@/assets/logo/js.png";
import react from "@/assets/logo/react-logo.svg";
import testing from "@/assets/logo/testing-icon.svg";
import nodejs from "@/assets/logo/nodejs-icon.svg";
import typescript from "@/assets/logo/ts-logo-256.svg";
import vite from "@/assets/logo/vite-logo.png";
import nestjs from "@/assets/logo/nestjs_logo_icon_168087.svg";

export function getLogoImageByTags(tags: string[]): {
  src: string;
  name: string;
} {
  const tag = tags[0]?.toLowerCase();

  switch (tag) {
    case "react":
    case "react-hooks":
    case "react-query":
    case "react-hook-form": {
      return {
        src: react.src,
        name: "react",
      };
    }
    case "javascript": {
      return {
        src: js.src,
        name: "JavaScript",
      };
    }
    case "macbook":
    case "apple":
    case "mac": {
      return {
        src: apple.src,
        name: "apple",
      };
    }
    case "testing":
    case "テスト":
    case "tdd":
    case "jest":
    case "vitest":
    case "react-testing-library":
    case "testing-library": {
      return {
        src: testing.src,
        name: "testing",
      };
    }
    case "css":
    case "sass": {
      return {
        src: css.src,
        name: "css",
      };
    }
    case "astro": {
      return {
        src: astro.src,
        name: "astro",
      };
    }
    case "aws": {
      return {
        src: aws.src,
        name: "aws",
      };
    }
    case "docker": {
      return {
        src: docker.src,
        name: "docker",
      };
    }
    case "nodejs": {
      return {
        src: nodejs.src,
        name: "nodejs",
      };
    }
    case "typescript": {
      return {
        src: typescript.src,
        name: "typescript",
      };
    }
    case "nestjs": {
      return {
        src: nestjs.src,
        name: "nestjs",
      };
    }
    case "vite": {
      return {
        src: vite.src,
        name: "vite",
      };
    }
    default: {
      return {
        src: siteConfig.userIcon.src,
        name: "恐竜",
      };
    }
  }
}
