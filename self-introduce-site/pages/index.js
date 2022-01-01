import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Layout from '../layouts/Layout';
import AboutSelf from '../components/AboutSelf';
import Progress from '../components/Progress';
import Values from '../components/Values';

let test = [
  ['about-1.png', '趣味', 'YouTubeの動画視聴が好きです！特にアイドルの動画を見るのが好きで、　乃木坂46、櫻坂46、日向坂46、BiSHなどが好きです！2021年の紅白歌合戦にBiSHが出ているのを見て、大感動しました。あと、本気でチャレンジしている人の言葉を動画で聞いたり、　　会って話すのが大好きです。', '176px'],
  ['about-2.png', '好きな食べ物', '玉子焼きしか勝たんです。特に、母が作る玉子焼きが大好きです。あと、「ハントンライス」が好きです。私の出身地である石川県金沢市の郷土料理です。是非調べてみてください！　　あと、カレーライスと、焼肉と、しゃぶしゃぶと、、、、好きな食べ物だらけです！', '196px'],
  ['about-3.png', '性格', '「これに本気で取り組む！」と決めたら、誰よりも徹底的にやります。常に何かに本気で取り組んでいないと気持ち悪くて、新たなチャレンジを常に求めます。本気のチャレンジが、人生を豊かにすると信じています。あと昔からよく「天然だね」と言われます。', '247px'],
]

let skills = [
  ['PHP', '80%'],
  ['JavaScript', '60%'],
  ['Python', '80%'],
  ['リアル・オンライン集客', '70%']
]

let values = [
  ['value1.png', '人生の主人公は、自分', '一生に一度の人生、自分が主人公の物語を、今生きています。何か辛いことがあっても、「物語が面白くなった」とポジティブに捉え、最高の物語にするためにチャレンジを続けることができます。', true],
  ['value2.png', '「本気」が、人生を豊かに', '「本気」は、人に感動を与えます。そして、何よりも自分自身が感動します。「本気」だからこそ経験できることがたくさんあります。本気で取り組んだ経験は、人生の財産です。', true],
  ['value3.png', '人生、楽しんだもん勝ち', '人生の限られた時間を、「楽しい」で埋め尽くしたい。「本当の楽しさ」は、本気のチャレンジ、人との触れ合いから生まれる。誰になんと思われようと、楽しければ人生勝ち組。', false]
]

export default () => (
  <Layout>
    {/* ブロック1 */}
    <div className='flex' style={{'height': '500px', 'background-color': '#6bc2c3'}}>
      <div className="w-6/12 flex justify-center items-center text-white tracking-widest">
        <div className="w-full pl-24">
          <div className='text-4xl font-bold'>
            【米 勝矢】の自己紹介ページ
          </div>
          <div className='text-2xl mt-4'>
            「現在」と「未来」について
          </div>
        </div>
      </div>
      <div className="w-6/12">
        <img src="hero.png" className="inline-block pt-8 ml-24" style={{'width': '520px'}} />
      </div>
    </div>
    {/* ブロック2 */}
    <div className="bg-bg-about bg-cover flex" style={{'height': '620px'}}>
      <div className="h-full" style={{'width': '15%'}}></div>
      <div className="h-full" style={{'width': '70%'}}>
        <div className="text-center" style={{'height': '16%'}}>
          <div className="pt-8 inline-block">
            <span className="table-cell align-middle text-2xl pr-2 tracking-widest font-bold">私について</span>
            <span className="table-cell align-middle" style={{'color': '#008c8d'}}>ABOUT</span>
          </div>
        </div>
        <div className='flex justify-between' style={{'height': '84%'}}>
          {test.map((value) => (
            <AboutSelf img={value[0]} title={value[1]} content={value[2]} width={value[3]} />
          ))}
        </div>
      </div>
      <div className="h-full" style={{'width': '15%'}}></div>
    </div>
    {/* ブロック3 */}
    <div className="bg-bg-skills bg-contain bg-no-repeat -mt-20 mb-8 flex" style={{'height': '650px'}}>
        <div className="mt-28 w-full flex">
          <div className="text-right" style={{'width': '45%'}}>
            <img src="skill.png" className="w-10/12 inline-block pt-12" />
          </div>
          <div className="ml-6" style={{'width': '55%'}}>
            <div className="h-full w-9/12">
              <div>
                <span className="table-cell align-middle text-2xl pr-2 tracking-widest font-bold">スキル</span>
                <span className="table-cell align-middle" style={{'color': '#008c8d'}}>SKILLS</span>
              </div>
              <div className="mt-4">実務経験約1年で、個人でWebアプリを開発してリリースした経験があります。会社の新規事業立ち上げメンバーとして事業運営の経験があり、アプリ開発後に必須の「集客」も得意です。</div>
              <div className="h-72 w-full mt-4 bg-white p-7 pr-10">
                {skills.map((value) => (
                  <Progress skill={value[0]} status={value[1]} />
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
    {/* ブロック４ */}
    <div className="text-center">
      <div className="inline-block">
        <span className="table-cell align-middle text-2xl pr-2 tracking-widest font-bold">価値観</span>
        <span className="table-cell align-middle" style={{'color': '#008c8d'}}>VALUES</span>
      </div>
    </div>
    <div className="text-center">
      <div className="mt-6 h-96 w-2/3 inline-block bg-white">
        <div className="flex h-full">
          {values.map((value) => (
            <Values src={value[0]} title={value[1]} content={value[2]} border_flg={value[3]} />
          ))}
        </div>
      </div>
    </div>
    {/* ブロック5 */}
    <div className="bg-bg-future bg-cover bg-no-repeat -mt-64" style={{'height': '570px'}}>
      <div className="text-center">
        <div className="mt-80 h-52 w-2/3 inline-block">
          <div className="flex h-full">
            <div className="w-1/2 h-full">
              <div>
                <span className="table-cell align-middle text-2xl pr-2 tracking-widest font-bold">3年後にやりたいこと</span>
                <span className="table-cell align-middle" style={{'color': '#008c8d'}}>FUTURE</span>
              </div>
              <div className="text-left mt-6 pr-6">
                3年後は、会社の代表取締役社長として、社員と本気の　毎日を過ごしています。人と人を繋げて「楽しさ」や　　「本気」を創出し、あらゆる個人が輝く社会、そして本気の人を応援し合えるような社会の実現に向けて、価値提供を行っています。メディアにも多数取り上げられ、会社としても個人としても、注目されます。
              </div>
            </div>
            <div className="w-1/2 h-full bg-future bg-cover bg-no-repeat">
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

