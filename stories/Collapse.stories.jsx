import React, { useState } from 'react'
import Collapse from './../components/Collapse'

export default {
  title: 'Collapse',
  component: Collapse,
}

export const Normal = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapse isOpen={isOpen} handleHeaderClick={() => setIsOpen(v => !v)} >
      <div>杜甫</div>
      <div>
      杜甫的思想核心是儒家的仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。杜甫虽然在世时名声并不显赫，但后来声名远播，对中国文学和日本文学都产生了深远的影响。杜甫共有约1500首诗歌被保留了下来，大多集于《杜工部集》。
      </div>
    </Collapse>
    // <Collapse isOpen={isOpen} handleHeaderClick={() => setIsOpen(v => !v)} >
    //   <div>李清照</div>
    //   <div>
    //     李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。出嫁后与夫赵明诚共同致力于书画金石的搜集整理。金兵入据中原时，流寓南方，境遇孤苦。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。
    //   </div>
    // </Collapse>
    // <Collapse isOpen={isOpen} handleHeaderClick={() => setIsOpen(v => !v)} >
    //   <div>鲁迅</div>
    //   <div>
    //     鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。
    //   </div>
    // </Collapse>
  )
}