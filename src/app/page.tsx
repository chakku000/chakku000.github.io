import Image from "next/image";
import {Playfair_Display} from "next/font/google"; 

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className="m-5 mt-20 text-sm">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex w-md">
            <Image src="/chakku_logo.jpg" alt="logo" width="128" height="128" className="border-slate-600 border-2"
              style={{
                borderRadius: '50%',
              }}/>
            <div className="w-3xs flex items-center my-3">
              <div className={`w-full ps-5`}>
                <div className={`text-xl ${playfairDisplay.className}`}>chakku</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <div className="flex w-md">
            <h1 className="text-xl">アカウント</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-md">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </div>
                  </td>
                  <td>
                    <a href="https://x.com/chakku_000" target="_blank"><span className="text-blue-500 hover:text-blue-800">@chakku_000</span></a>
                  </td>
                </tr>
                <tr>
                  <td className="pe-3">Blog</td>
                  <td>
                    <a href="https://chakku.hatenablog.com"
                      className="hover:underline text-blue-500 hover:text-blue-800"
                      target="_blank"
                    >
                      ちゃっくのメモ帳
                    </a>
                    （今後更新予定無し）
                  </td>
                </tr>
                <tr>
                  <td>Blog</td>
                  <td>
                    <a href="https://blog.chakku.jp"
                      className="hover:underline text-blue-500 hover:text-blue-800"
                      target="_blank"
                    >
                      ちゃっくの泣き言
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-5 flex justify-center">
          <div className="w-md">
            <h1 className="text-xl">職業</h1>
            <p>
              ソフトウェアエンジニア。MLOps, DevOps的なことを主にやります。
            </p>
            <p>
              主な技術スタックはGo, Python, Kubernetesあたりです。（他にもありますが気になる方は直接聞いて下さい）
            </p>
          </div>
        </div>
        <div className="my-5 flex justify-center">
          <div className="w-md">
            <h1 className="text-xl">趣味</h1>
            <p>
              学生時代は競技プログラミングをしていましたが今はもうしていません。
              今は年に1度ISUCONに出ています。IQ1というチームで出ています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
