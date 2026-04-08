/**
 * =====================================================
 *  Memories of Game — 游戏数据文件
 *  更新时只需编辑这个文件，不需要动 game-museum.html
 * =====================================================
 *
 *  【如何添加新游戏】
 *  在对应年份的数组中，复制一条 { } 记录，按格式填写即可：
 *
 *    { name: '游戏名称',
 *      file: '图片文件名.jpg',       ← 放在 covers/ 目录下
 *      developer: '开发商',
 *      date: 'YYYY-MM-DD',          ← 发售日期
 *      tags: ['类型1', '类型2'],    ← 1~3个标签
 *      hero: true                   ← 仅年度最佳游戏需要，其他删掉这行
 *    },
 *
 *  【如何添加新年份】
 *  1. 在 gamesData 中增加新的年份块（参考下面 2026 示例）
 *  2. 在 yearThemes 中为新年份设置主题色
 *  3. 在 game-museum.html 的年份筛选按钮区域增加对应按钮
 *
 * =====================================================
 */

// ─── 年度主题色 ─────────────────────────────────────
// 每个年份对应一个主题色（建议用该年度最佳游戏的主色调）
const yearThemes = {
    2023: { color: '#3d5a3d', name: '王国之泪绿' },
    2024: { color: '#c73e3a', name: '悟空红' },
    2025: { color: '#d4af37', name: '机兵金' },
    2026: { color: '#8b0000', name: '安魂曲红' },  // 生化危机主题色
};


// ─── 游戏数据 ────────────────────────────────────────
const gamesData = {

    // ====================================================
    //  2025 年
    // ====================================================
    2025: [
        // 【年度最佳】标记 hero: true，每年只设一个
        { name: '十三机兵防卫圈',        file: '2025_08_十三机兵防卫圈.jpg',             developer: 'Vanillaware',       date: '2019-11-28', tags: ['冒险'],         hero: true },

        // 其他游戏按发售/游玩顺序排列即可
        { name: '鬼武者重制版',           file: '2025_01_鬼武者重制版.jpg',               developer: 'Capcom',            date: '2018-12-20', tags: ['动作'] },
        { name: '大神·绝景版',            file: '2025_02_大神·绝景版.jpg',                developer: 'Clover Studio',     date: '2017-12-12', tags: ['动作冒险'] },
        { name: '索尼克×夏特 世代重启',   file: '2025_03_索尼克×夏特 世代重启.jpg',      developer: 'Sonic Team',        date: '2024-10-25', tags: ['平台跳跃'] },
        { name: '超时空之轮',             file: '2025_05_超时空之轮.jpg',                 developer: 'Square',            date: '1995-03-11', tags: ['回合制RPG'] },
        { name: '鬼泣5',                  file: '2025_06_鬼泣5.jpg',                      developer: 'Capcom',            date: '2019-03-08', tags: ['动作'] },
        { name: '怪物猎人荒野',           file: '2025_07_怪物猎人荒野.jpg',               developer: 'Capcom',            date: '2025-02-28', tags: ['动作RPG'] },
        { name: '奥日·精灵与萤火意志',    file: '2025_09_奥日·精灵与萤火意志.jpg',       developer: 'Moon Studios',      date: '2020-03-11', tags: ['平台跳跃'] },
        { name: '剑星',                   file: '2025_10_剑星.jpg',                       developer: 'Shift Up',          date: '2024-04-26', tags: ['动作'] },
        { name: '忍龙外传·怒之羁绊',      file: '2025_11_忍龙外传·怒之羁绊.jpg',         developer: 'Team Ninja',        date: '2021-06-10', tags: ['动作'] },
        { name: '超级忍·反攻的斩击',      file: '2025_12_超级忍·反攻的斩击.jpg',         developer: 'Sega',              date: '2023-08-29', tags: ['动作'] },
        { name: '泰坦陨落2',              file: '2025_13_泰坦陨落2.jpg',                  developer: 'Respawn',           date: '2016-10-28', tags: ['射击'] },
        { name: '赛博朋克2077·往日之影',  file: '2025_14_赛博朋克2077·往日之影.jpg',     developer: 'CD Projekt Red',    date: '2023-09-26', tags: ['开放世界'] },
        { name: '密特罗德究极4·穿越未知', file: '2025_15_密特罗德究极4·穿越未知.jpg',    developer: 'Retro Studios',     date: '2025-10-?',  tags: ['第一人称射击'] },
    ],

    // ====================================================
    //  2024 年
    // ====================================================
    2024: [
        { name: '黑神话悟空',             file: '2024_13_黑神话悟空.jpg',                 developer: 'Game Science',      date: '2024-08-20', tags: ['动作RPG'],     hero: true },

        { name: '龙之信条·黑暗觉者',      file: '2024_01_龙之信条·黑暗觉者.jpg',         developer: 'Capcom',            date: '2012-05-22', tags: ['动作RPG'] },
        { name: '神之天平',               file: '2024_02_神之天平.jpg',                   developer: 'KEIZO',             date: '2022-07-28', tags: ['动作RPG'] },
        { name: '超级密特罗德',           file: '2024_03_超级密特罗德.jpg',               developer: 'Nintendo',          date: '1994-03-19', tags: ['银河恶魔城'] },
        { name: '战神4',                  file: '2024_04_战神4.jpg',                      developer: 'Santa Monica Studio', date: '2018-04-20', tags: ['动作冒险'] },
        { name: '异界锁链',               file: '2024_05_异界锁链.jpg',                   developer: 'PlatinumGames',     date: '2019-08-30', tags: ['动作'] },
        { name: '死亡搁浅',               file: '2024_07_死亡搁浅.jpg',                   developer: 'Kojima Productions', date: '2019-11-08', tags: ['动作'] },
        { name: '龙之信条2',              file: '2024_08_龙之信条2.jpg',                  developer: 'Capcom',            date: '2024-03-22', tags: ['动作RPG'] },
        { name: '圣兽之王',               file: '2024_09_圣兽之王.jpg',                   developer: 'Vanillaware',       date: '2024-03-08', tags: ['策略RPG'] },
        { name: '最后生还者Remaster',     file: '2024_10_最后生还者Remaster.jpg',         developer: 'Naughty Dog',       date: '2022-09-02', tags: ['动作冒险'] },
        { name: '艾尔登法环·黄金树阴影',  file: '2024_11_艾尔登法环·黄金树阴影.jpg',     developer: 'FromSoftware',      date: '2024-06-21', tags: ['动作RPG'] },
        { name: '女神异闻录5皇家版',      file: '2024_12_女神异闻录5皇家版.jpg',          developer: 'Atlus',             date: '2019-10-31', tags: ['回合制RPG'] },
        { name: '塞尔达传说·智慧的再现',  file: '2024_14_塞尔达传说·智慧的再现.jpg',     developer: 'Nintendo',          date: '2024-09-26', tags: ['动作冒险'] },
        { name: '贝优妮塔1',              file: '2024_15_贝优妮塔1.jpg',                  developer: 'PlatinumGames',     date: '2009-10-29', tags: ['动作'] },
        { name: '贝优妮塔2',              file: '2024_16_贝优妮塔2.jpg',                  developer: 'PlatinumGames',     date: '2014-09-20', tags: ['动作'] },
        { name: '真女神转生5Vengeance',   file: '2024_17_真女神转生5Vengeance.jpg',       developer: 'Atlus',             date: '2024-06-14', tags: ['回合制RPG'] },
    ],

    // ====================================================
    //  2023 年
    // ====================================================
    2023: [
        { name: '塞尔达传说·王国之泪',    file: '2023_04_塞尔达传说·王国之泪.jpg',       developer: 'Nintendo',          date: '2023-05-12', tags: ['开放世界'],    hero: true },

        { name: '尼尔·人工生命',          file: '2023_01_尼尔·人工生命.jpg',              developer: 'Square Enix',       date: '2021-04-22', tags: ['动作RPG'] },
        { name: '霍格沃兹遗产',           file: '2023_02_霍格沃兹遗产.jpeg',              developer: 'Avalanche Software', date: '2023-02-10', tags: ['开放世界'] },
        { name: '生化危机RE4',            file: '2023_03_生化危机RE4.jpg',                developer: 'Capcom',            date: '2023-03-24', tags: ['生存恐怖'] },
        { name: '最终幻想VII remake intergrade', file: '2023_05_最终幻想VII remake intergrade.jpeg', developer: 'Square Enix', date: '2021-06-10', tags: ['动作RPG'] },
        { name: '密特罗德·究极Remaster',  file: '2023_06_密特罗德·究极Remaster.jpg',     developer: 'Retro Studios',     date: '2023-02-08', tags: ['第一人称射击'] },
        { name: '装甲核心6',              file: '2023_07_装甲核心6.jpeg',                 developer: 'FromSoftware',      date: '2023-08-25', tags: ['机甲动作'] },
        { name: '八方旅人2',              file: '2023_08_八方旅人2.jpg',                  developer: 'Square Enix',       date: '2023-02-24', tags: ['回合制RPG'] },
        { name: 'Cocoon',                 file: '2023_09_Cocoon.jpg',                     developer: 'Geometric Interactive', date: '2023-09-29', tags: ['解谜'] },
        { name: '超级马里奥·惊奇',        file: '2023_10_超级马里奥·惊奇.jpg',            developer: 'Nintendo',          date: '2023-10-20', tags: ['平台跳跃'] },
        { name: '旺达与巨像Remaster',     file: '2023_11_旺达与巨像Remaster.jpeg',        developer: 'Bluepoint Games',   date: '2018-02-06', tags: ['动作冒险'] },
        { name: '星之海洋2重置版',        file: '2023_12_星之海洋2重置版.jpg',            developer: 'Square Enix',       date: '2023-11-02', tags: ['动作RPG'] },
        { name: '地平线·零之曙光',        file: '2023_13_地平线·零之曙光.jpeg',           developer: 'Guerrilla Games',   date: '2017-02-28', tags: ['开放世界'] },
    ],

    // ====================================================
    //  2026 年
    // ====================================================
    2026: [
        // 【年度最佳】生化危机：安魂曲
        { name: '生化危机：安魂曲',       file: '2026_04_生化危机：安魂曲.jpg',             developer: 'Capcom',            date: '2026-02-27', tags: ['生存恐怖'],    hero: true },

        { name: '忍者龙剑传4',            file: '2026_01_忍者龙剑传4.jpg',                  developer: 'Team Ninja / 白金工作室', date: '2025-10-21', tags: ['动作'] },
        { name: '蒂德莉特的奇境冒险',     file: '2026_02_蒂德莉特的奇境冒险.jpg',          developer: 'Team Ladybug',      date: '2021-03-12', tags: ['银河恶魔城'] },
        { name: '超级马里奥银河',         file: '2026_03_超级马里奥银河.jpg',              developer: 'Nintendo',          date: '2007-11-01', tags: ['平台动作'] },
        { name: '超级马里奥银河2',        file: '2026_05_超级马里奥银河2.jpg',             developer: 'Nintendo',          date: '2010-05-23', tags: ['平台动作'] },
    ],

};
