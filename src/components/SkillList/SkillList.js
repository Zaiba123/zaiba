import React from 'react';
import sunflower from '../../images/sunflowerEmoji.png'

import '../SkillList/skillList.css'

export default function InteractiveList() {
  const languages = ["JavaScript","React.js","C++","Python","SQL","HTML","CSS","Redux","Git","SCSS","Node.js"]
  return (
    <div >
            <div className="f-box">
                {
                  languages.map(lan => {
                      return (
                          <div className="flex-container">
                            <img alt="sunflower" src={sunflower} className="sunflower-emoji" /> {lan}
                          </div>
                      )
                  })
                }
            </div>

    </div>
  );
}