import type { Concern, Feature, Note, Spec, Stat, Step } from './types'

export const product = {
  name: '砂どけい箱 60',
  subtitle: '受験生のための、スマホ休憩ボックス',
  price: '3,980',
  time: '60',
  target: '受験生の母へ',
  promise: '最初の60分を、親子で揉めずに始める。',
  lead:
    'スマホを責めるのではなく、机の上に「今は休ませる場所」をつくる。砂が落ちきるまでフタが開かない、木のスマホ箱です。',
}

export const navLinks = [
  { href: '#how', label: '使い方' },
  { href: '#features', label: '特長' },
  { href: '#pricing', label: '価格' },
  { href: '#faq', label: 'FAQ' },
] as const

export const features: Feature[] = [
  {
    id: 'visible-time',
    icon: 'Hourglass',
    title: '残り時間が、砂で見える',
    desc: '画面の数字ではなく、白い砂が少しずつ落ちる様子で時間を感じられます。急かす音も通知もありません。',
    accent: 'sand',
  },
  {
    id: 'wooden-place',
    icon: 'Box',
    title: 'スマホを休ませる木の場所',
    desc: '木目の箱にスマホを1台しまうだけ。勉強机に置いても、罰の道具ではなく文具のように見える佇まいです。',
    accent: 'wood',
  },
  {
    id: 'no-negotiation',
    icon: 'MessageCircleOff',
    title: '毎回の声かけを減らす',
    desc: '「あと5分だけ」のやりとりを、砂時計に任せます。親が見張る時間を減らし、本人が始める流れを作ります。',
    accent: 'brass',
  },
  {
    id: 'single-session',
    icon: 'BookOpenCheck',
    title: '1コマだけに区切れる',
    desc: '設定は60分。長すぎる封印ではなく、英単語・過去問・復習など、最初の1コマを守る設計です。',
    accent: 'ink',
  },
]

export const steps: Step[] = [
  {
    id: 'place',
    num: '01',
    title: 'スマホを入れる',
    desc: 'ケースやリングの厚みがある場合は、入るかを確認してから使います。',
    accent: 'wood',
  },
  {
    id: 'turn',
    num: '02',
    title: '砂時計をひっくり返す',
    desc: '右端の砂時計が、フタを開けられない時間の合図になります。',
    accent: 'brass',
  },
  {
    id: 'study',
    num: '03',
    title: '砂が落ちきるまで待つ',
    desc: '通知から離れて、まず60分。終わったら休憩や連絡の時間を決められます。',
    accent: 'sand',
  },
]

export const specs: Spec[] = [
  { label: '価格', value: '3,980円' },
  { label: '砂時計', value: '60分' },
  { label: '収納', value: 'スマホ1台' },
  { label: '素材の印象', value: '木目・真鍮色・白い砂' },
]

export const stats: Stat[] = [
  { value: '60', label: '分だけ区切る', note: '※架空の設定' },
  { value: '1', label: 'スマホ1台分の場所' },
  { value: '3,980', label: '円の想定価格' },
]

export const notes: Note[] = [
  {
    id: 'mother',
    title: '言い合いを増やさない',
    body: 'この箱は、親が勝つための道具ではありません。約束した時間を、親子の外側に置くための道具です。',
    accent: 'brass',
  },
  {
    id: 'student',
    title: '本人の始めやすさを残す',
    body: '「しまいなさい」ではなく「60分だけ預けよう」。受験生の気持ちを折らずに、机へ戻るきっかけを作ります。',
    accent: 'wood',
  },
  {
    id: 'desk',
    title: '机に置きっぱなしで絵になる',
    body: '写真で確認できる木目と砂時計の佇まいを活かし、生活感の強いロック用品に見えにくい設定にしています。',
    accent: 'sand',
  },
]

export const concerns: Concern[] = [
  {
    id: 'time',
    q: '10分ではなく60分なのはなぜ？',
    a: '受験勉強の最初の1コマに合わせた設定です。長時間の強制ではなく、始めるところだけを守る考え方です。',
  },
  {
    id: 'buy',
    q: 'このページから購入できますか？',
    a: 'できません。ウラチカLP選手権用の架空商品ページなので、ボタンは飾りです。',
  },
  {
    id: 'shape',
    q: '写真にない機能はありますか？',
    a: 'ありません。スマホ1台が入る木の箱、砂時計を返すと砂が落ちきるまでフタが開かない、という範囲で表現しています。',
  },
]
