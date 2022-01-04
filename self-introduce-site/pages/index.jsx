import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Image from 'next/image';
import AboutSelf from '../components/AboutSelf';
import Progress from '../components/Progress';
import Values from '../components/Values';
import Layout from '../layouts/Layout';
import styles from '../styles/pages/Index.module.scss';
let abouts = [
  [
    '/image/about-1.png',
    '趣味',
    'YouTubeの動画視聴が好きです！特にアイドルの動画を見るのが好きで、　乃木坂46、櫻坂46、日向坂46、BiSHなどが好きです！2021年の紅白歌合戦にBiSHが出ているのを見て、大感動しました。あと、本気でチャレンジしている人の言葉を動画で聞いたり、　　会って話すのが大好きです。',
    '176px',
  ],
  [
    '/image/about-2.png',
    '好きな食べ物',
    '玉子焼きしか勝たんです。特に、母が作る玉子焼きが大好きです。あと、「ハントンライス」が好きです。私の出身地である石川県金沢市の郷土料理です。是非調べてみてください！　　あと、カレーライスと、焼肉と、しゃぶしゃぶと、、、、好きな食べ物だらけです！',
    '196px',
  ],
  [
    '/image/about-3.png',
    '性格',
    '「これに本気で取り組む！」と決めたら、誰よりも徹底的にやります。常に何かに本気で取り組んでいないと気持ち悪くて、新たなチャレンジを常に求めます。本気のチャレンジが、人生を豊かにすると信じています。あと昔からよく「天然だね」と言われます。',
    '247px',
  ],
];

let skills = [
  ['PHP', '80%'],
  ['JavaScript', '60%'],
  ['Python', '80%'],
  ['リアル・オンライン集客', '70%'],
];

let values = [
  [
    '/image/value1.png',
    '人生の主人公は、自分',
    '一生に一度の人生、自分が主人公の物語を、今生きています。何か辛いことがあっても、「物語が面白くなった」とポジティブに捉え、最高の物語にするためにチャレンジを続けることができます。',
    true,
  ],
  [
    '/image/value2.png',
    '「本気」が、人生を豊かに',
    '「本気」は、人に感動を与えます。そして、何よりも自分自身が感動します。「本気」だからこそ経験できることがたくさんあります。本気で取り組んだ経験は、人生の財産です。',
    true,
  ],
  [
    '/image/value3.png',
    '人生、楽しんだもん勝ち',
    '人生の限られた時間を、「楽しい」で埋め尽くしたい。「本当の楽しさ」は、本気のチャレンジ、人との触れ合いから生まれる。誰になんと思われようと、楽しければ人生勝ち組。',
    false,
  ],
];

export default function Index() {
  return (
    <Layout>
      {/* ブロック1 */}
      <div className={`flex bg-header-green ${styles.h500}`}>
        <div className='flex justify-center items-center w-6/12 tracking-widest text-white'>
          <div className='pl-24 w-full'>
            <div className='text-4xl font-bold'>【米 勝矢】の自己紹介ページ</div>
            <div className='mt-4 text-2xl'>「現在」と「未来」について</div>
          </div>
        </div>
        <div className='w-6/12'>
          <div className='pl-24'>
            <Image
              src='/image/hero.png'
              alt='アイキャッチ画像'
              objectFit='contain'
              width={520}
              height={505}
            />
          </div>
        </div>
      </div>
      {/* ブロック2 */}
      <div className={`flex bg-cover bg-bg-about ${styles.h620}`} id='about'>
        <div className={`h-full ${styles.w15per}`}></div>
        <div className={`h-full ${styles.w70per}`}>
          <div className={`text-center ${styles.h16per}`}>
            <div className='inline-block pt-8'>
              <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
                私について
              </span>
              <span className='table-cell align-middle text-text-green'>ABOUT</span>
            </div>
          </div>
          <div className={`flex justify-between ${styles.h84per}`}>
            {abouts.map((value) => (
              <>
                <AboutSelf img={value[0]} title={value[1]} content={value[2]} width={value[3]} />
              </>
            ))}
          </div>
        </div>
        <div className={`h-full ${styles.w15per}`}></div>
      </div>
      {/* ブロック3 */}
      <div className={`flex -mt-20 mb-8 bg-contain bg-bg-skills ${styles.h645}`} id='skills'>
        <div className='flex mt-28 w-full'>
          <div className={`text-right ${styles.w45per}`}>
            <Image
              src='/image/skill.png'
              width={500}
              height={460}
              objectFit='contain'
              alt='スキルの画像'
            />
          </div>
          <div className={`ml-6 ${styles.w55per}`}>
            <div className='w-9/12 h-full'>
              <div>
                <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
                  スキル
                </span>
                <span className='table-cell align-middle text-text-green'>SKILLS</span>
              </div>
              <div className='mt-4'>
                実務経験約1年で、個人でWebアプリを開発してリリースした経験があります。会社の新規事業立ち上げメンバーとして事業運営の経験があり、アプリ開発後に必須の「集客」も得意です。
              </div>
              <div className='p-7 pr-10 mt-4 w-full h-72 bg-white'>
                {skills.map((value) => (
                  <>
                    <Progress skill={value[0]} status={value[1]} />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ブロック４ */}
      <div className='text-center' id='values'>
        <div className='inline-block'>
          <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
            価値観
          </span>
          <span className='table-cell align-middle text-text-green'>VALUES</span>
        </div>
      </div>
      <div className='text-center'>
        <div className='inline-block mt-6 w-2/3 h-96 bg-white'>
          <div className='flex h-full'>
            {values.map((value) => (
              <>
                <Values src={value[0]} title={value[1]} content={value[2]} border_flg={value[3]} />
              </>
            ))}
          </div>
        </div>
      </div>
      {/* ブロック5 */}
      <div className={`-mt-64 bg-no-repeat bg-cover bg-bg-future ${styles.h570}`}>
        <div className='text-center'>
          <div className='inline-block mt-80 w-2/3 h-52' id='future'>
            <div className='flex h-full'>
              <div className='w-1/2 h-full'>
                <div>
                  <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
                    3年後にやりたいこと
                  </span>
                  <span className='table-cell align-middle text-text-green'>FUTURE</span>
                </div>
                <div className='pr-6 mt-6 text-left'>
                  3年後は、会社の代表取締役社長として、社員と本気の　毎日を過ごしています。人と人を繋げて「楽しさ」や　　「本気」を創出し、あらゆる個人が輝く社会、そして本気の人を応援し合えるような社会の実現に向けて、価値提供を行っています。メディアにも多数取り上げられ、会社としても個人としても、注目されます。
                </div>
              </div>
              <div className='w-1/2 h-full bg-no-repeat bg-cover bg-future'></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
