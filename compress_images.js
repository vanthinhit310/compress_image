import compressImages from "compress-images";

const input_path = "images/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
const output_path = "compressed/";

compressImages(
  input_path,
  output_path,
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "80"] } },
  { png: { engine: "pngquant", command: ["--quality=60-70", "-o"] } },
  { svg: { engine: "svgo", command: "--multipass" } },
  { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function (error, completed, statistic) {
    console.log("-------------");
    console.log(error || "Success");
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
);
