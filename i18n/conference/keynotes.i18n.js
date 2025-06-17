import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Keynote Speech',
        intro:
            'PyCon TW 2025 invites two speakers to give keynote speeches during the ' +
            'two-day conference. ' +
            'Each keynote speaker is considered one of the most important figures ' +
            'in their respective fields. ' +
            'They will share their professional experience and the image of their domain’s future.',
        terms: {
            bio: 'Bio',
            talk: 'Talk',
            note: 'Note',
        },
    },
    'zh-hant': {
        title: '主題演講',
        intro:
            '為期兩天的議程中，每天各有一場主題演講（Keynote）。{br}' +
            '主題演講講者都是在全球而言各領域非常頂尖的人士；{br}' +
            '他們將帶來對自己的領域、專案的經驗分享，或者對於未來數年發展的方向與想像。',
        terms: {
            bio: '講者介紹',
            talk: '演講',
            note: '共筆',
        },
    },
})
