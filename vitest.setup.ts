import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { beforeAll, afterAll, afterEach } from "vitest";
import "@vanilla-extract/css/disableRuntimeStyles";

beforeAll(() => cleanup());

afterEach(() => cleanup());

afterAll(() => cleanup());
