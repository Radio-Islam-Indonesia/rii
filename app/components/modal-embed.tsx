import type { TrackInfo } from "./radio-entity";
import { RadioItem, RadioItemPlayer } from "./radio-item";
import type { ThemeName } from "./utils";
import { APP_URL, themes } from "./utils";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";

function generateIFrameTemplate(
  src: string,
  dimensions: { width?: string; height?: string }
) {
  return `<iframe 
  src="${src}"
  scrolling="no"
  frameborder="0" 
  ${dimensions.width ? `width="${dimensions.width}"` : ""}
  ${dimensions.height ? `height="${dimensions.height}"` : ""}></iframe>`;
}

export type ModalEmbedProps = {
  track?: TrackInfo;
};

export function ModalEmbed({ track }: ModalEmbedProps) {
  const [theme, setTheme] = useState<ThemeName>("cupcake");
  const [mode, setMode] = useState<"card" | "player">("card");
  return (
    <>
      <input type="checkbox" id="modal-embed" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-white flex flex-row gap-4">
          <div className="overflow-y-auto flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-bold text-neutral mb-4">Theme</h3>
              <div className="carousel gap-2">
                {themes.map((item) => (
                  <button
                    key={item.name}
                    className={`btn btn-ghost btn-xs text-white carousel-item ${item.color}`}
                    onClick={() => setTheme(item.name)}
                  >
                    {item.name === "dracula" ? "dark" : item.name}
                    {item.name === theme ? <BiCheck size={20} /> : null}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral mb-4">Mode</h3>
              <div className="carousel gap-2">
                {["card", "player"].map((value) => (
                  <button
                    key={value}
                    className={"btn btn-accent btn-xs carousel-item"}
                    onClick={() =>
                      setMode(value === "player" ? "player" : "card")
                    }
                  >
                    {value}
                    {value === mode ? <BiCheck size={20} /> : null}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-neutral">
                Salin kode berikut untuk pasang di website atau blog kamu.
              </p>
              <p className="text-info">
                * width & height bisa disesuaikan kebutuhan
              </p>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {track
                    ? generateIFrameTemplate(
                        `${APP_URL}/embed/radio/${track.alias}?theme=${theme}&mode=${mode}`,
                        mode === "player"
                          ? { width: "320", height: "480" }
                          : { width: "320", height: "220" }
                      )
                    : ""}
                </code>
              </pre>
            </div>
            <div className="modal-action">
              <label
                htmlFor="modal-embed"
                className="btn btn-outline btn-sm border-neutral-content"
              >
                <span className="text-neutral">Tutup</span>
              </label>
            </div>
          </div>
          <div className="w-2/3">
            <h3 className="text-lg font-bold text-neutral mb-4">Preview</h3>
            <div data-theme={theme}>
              {track ? (
                mode === "player" ? (
                  <RadioItemPlayer item={track} embed />
                ) : (
                  <RadioItem item={track} embed />
                )
              ) : null}
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="modal-embed">
          Close
        </label>
      </div>
    </>
  );
}
