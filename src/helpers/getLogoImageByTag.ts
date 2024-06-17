import { siteConfig } from "@/siteConfig";

export function getLogoImageByTag(tag: string): {
  src: string;
  name: string;
} {
  switch (tag.toLowerCase()) {
    case "react":
    case "react-hooks":
    case "react-query":
    case "react-hook-form": {
      return {
        src: "/assets/logo/react-logo.svg",
        name: "react",
      };
    }
    case "javascript": {
      return {
        src: "/assets/logo/js.png",
        name: "JavaScript",
      };
    }
    case "macbook":
    case "apple":
    case "mac": {
      return {
        src: "/assets/logo/apple-logo.png",
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
        src: "/assets/logo/testing-icon.svg",
        name: "testing",
      };
    }
    case "css":
    case "sass": {
      return {
        src: "/assets/logo/css-logo.png",
        name: "css",
      };
    }
    case "astro": {
      return {
        src: "/assets/logo/astro-logo.png",
        name: "astro",
      };
    }
    case "aws": {
      return {
        src: "/assets/logo/AWS-Cloud-logo_32.svg",
        name: "aws",
      };
    }
    case "docker": {
      return {
        src: "/assets/logo/docker-mark-blue.svg",
        name: "docker",
      };
    }
    case "nodejs":
    case "node.js": {
      return {
        src: "/assets/logo/nodejs-icon.svg",
        name: "nodejs",
      };
    }
    case "typescript": {
      return {
        src: "/assets/logo/ts-logo-256.svg",
        name: "typescript",
      };
    }
    case "nestjs":
    case "nest.js": {
      return {
        src: "/assets/logo/nestjs_logo_icon_168087.svg",
        name: "nestjs",
      };
    }
    case "vite": {
      return {
        src: "/assets/logo/vite-logo.png",
        name: "vite",
      };
    }
    default: {
      return {
        src: siteConfig.userIcon,
        name: "恐竜",
      };
    }
  }
}
