import { useState } from 'react'

export const Colours = () => {
  const [text, setText] = useState('')
  const [colourOfSuare, setColourOfSquare] = useState('')
  const [numberOfHex, setNumberOfHex] = useState<undefined | string>(undefined)
  // let numberOfHex: number | undefined
  const hexes = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  } as const
  const hexConvertToNumber = (input: string): string => {
    console.log(input)
    console.log(input[0])
    // So for "FF" Each position is a power of 16, just like 10s and 1s in decimal: FF = (F ×
    // 16¹) + (F × 16⁰) Replace F with 15: FF = (15 × 16) + (15 × 1) = 240 + 15 = 255 🧩 One more
    // example: "43" 43 = (4 × 16¹) + (3 × 16⁰) = (4 × 16) + (3 × 1) = 64 + 3 = 67 So when you see
    // a hex pair like #43, it really means 67 out of 255 intensity for that colour channel.
    const firstCharacter = input[0] && input[0].toUpperCase()
    const firstValue = hexes[firstCharacter as keyof typeof hexes]
    const secondChar = input[1] && input[1]?.toUpperCase()
    const secondValue = hexes[secondChar as keyof typeof hexes] | 0
    const redValue = (firstValue * 16 + secondValue).toString()

    const thirdCharacter = input[2] && input[2].toUpperCase()
    const thirdValue = hexes[thirdCharacter as keyof typeof hexes] | 0
    const fourthChar = input[3] && input[3]?.toUpperCase()
    const fourthValue = hexes[fourthChar as keyof typeof hexes] | 0
    const greenValue = (thirdValue * 16 + fourthValue).toString()

    const fifthCharacter = input[4] && input[4].toUpperCase()
    const fifthValue = hexes[fifthCharacter as keyof typeof hexes] | 0
    const sixthChar = input[5] && input[5]?.toUpperCase()
    const sixthValue = hexes[sixthChar as keyof typeof hexes] | 0
    const blueValue = (fifthValue * 16 + sixthValue).toString()

    console.log(redValue)
    return `Red: ${redValue} Green: ${greenValue} Blue: ${blueValue}`
  }

  const handleClickButton = () => {
    if (text) {
      setNumberOfHex(hexConvertToNumber(text))
      setColourOfSquare(text)
    }
  }

  return (
    <>
      <div className="article-body">
        {'Article 1 :-)'}
        Here is me choosing the colours for my website and last week in my art course I was making a
        colour wheel as part of my art course. I have decided to log here what I am doing. I found
        this webpage that should help:
        https://designtocodes.com/blog/how-to-choose-the-right-colors-for-your-website/ Step 1:
        <h3>Step 1: Understand Your Brand and Audience</h3>
        This is tricky. I have a lot of ideas. Overall in my life at the moment, healh, beauty,
        family, and spirituality are important. While the only thing on my website at the moment is
        the periodic table quiz.
        <h3>Step 2: Choose a Primary Colour</h3>
        So in the table on their site, I did like the sound of purple: Purple Emotions/Associations:
        Luxury, creativity, mystery. Common Industries: Beauty, arts, spirituality but purple is not
        a primary colour. Primary colours: blue, red and yellow. My gut feeling for the primary
        colours is blue.So went for primary, proper primary blue with 0000FF. Not sure that is
        exactly right. https://color.adobe.com/
      </div>
      <div>colour experimentation</div>
      <input
        placeholder="#"
        id="inputHex"
        onChange={(event) => setText(event.target.value)}
        value={text}
      ></input>
      <button onClick={handleClickButton}>Get number for hex</button>
      <div>{numberOfHex}</div>
      <div className="color-box" style={{ backgroundColor: `#${colourOfSuare}` }}>
        colour here
      </div>
      <h5>
        A hex colour code tells computers what colour to display, using a mix of red, green and blue
        light
      </h5>
      <h4>RGB colour model</h4>
      <h5>#RRGGBB</h5>
      <h3>Each pair of letters or numbers represent how strong each colour is.</h3>
      <h2> 00 - none</h2>
      <h2> FF - full</h2>
      <div style={{ display: 'flex' }}>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(255, 0, 0)' }}>
          rgb(255, 0, 0)
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(255, 0, 255)' }}>
          rgb(255, 0, 255)
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(0, 0, 255)' }}>
          rgb(0, 0, 255)
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(0, 255, 255)' }}>
          rgb(0, 255, 255)
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(0, 255, 0)' }}>
          rgb(0, 255, 0)
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(255, 255, 0)' }}>
          rgb(255, 255, 0)
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: 'rgb(255, 0, 0)' }}>
          Primary
          <br /> Red
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255, 83, 0)' }}>
          Tertiary
          <br /> Red/Orange
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255, 128, 0)' }}>
          Secondary
          <br /> Orange
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255, 200, 0)' }}>
          Tertiary
          <br /> Yellow/Orange
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(255, 255, 0)' }}>
          Primary
          <br /> Yellow
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(128, 255, 0)' }}>
          Tertiary
          <br />
          Yellow/Green
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(0, 255, 0)' }}>
          Secondary
          <br />
          Green
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'rgb(0, 128, 128)' }}>
          Tertiary
          <br />
          Blue-Green
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(0, 0, 255)' }}>
          Primary
          <br />
          Blue
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(102, 0, 204)' }}>
          Tertiary
          <br />
          Blue/Purple
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(128, 0, 128)' }}>
          Secondary
          <br />
          Purple
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(204, 0, 102)' }}>
          Secondary
          <br /> Red/Purple
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255, 0, 0)' }}>
          Primary
          <br />
          Red
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 50%)' }}>
          hsl(0, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(40, 100%, 50%)' }}>
          hsl(40, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(80, 100%, 50%)' }}>
          hsl(80, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(120, 100%, 50%)' }}>
          hsl(120, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(160, 100%, 50%)' }}>
          hsl(160, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(200, 100%, 50%)' }}>
          hsl(200, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(240, 100%, 50%)' }}>
          hsl(240, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(280, 100%, 50%)' }}>
          hsl(280, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(320, 100%, 50%)' }}>
          hsl(320, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(360, 100%, 50%)' }}>
          hsl(360, 100%, 50%)
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(20, 30%, 85%)' }}>
          cool, light
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(20, 30%, 85%)' }}>
          Fair skin with pink tone
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(15, 35%, 70%)' }}>
          Cool, medium
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(15, 35%, 70%)' }}>
          Rosy beige
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(35, 45%, 80%)' }}>
          Warm Light
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(35, 45%, 80%)' }}>
          Light peach tone
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(30, 50%, 65%)' }}>
          Warm Medium
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(30, 50%, 65%)' }}>
          Golden tan tone
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(15, 40%, 35%)' }}>
          Deep, cool
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(15, 40%, 35%)' }}>
          Deep brown with cool undertone
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(30, 50%, 30%)' }}>
          Deep, warm
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(30, 50%, 30%)' }}>
          Deep brown with golden warmth
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(0, 100%, 75%)' }}>
          0 Red
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(10, 100%, 75%)' }}>
          10
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(20, 100%, 75%)' }}>
          20
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(30, 100%, 75%)' }}>
          30
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(40, 100%, 75%)' }}>
          40
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(50, 100%, 75%)' }}>
          50
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(60, 100%, 75%)' }}>
          60 Yellow
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(70, 100%, 75%)' }}>
          70
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(80, 100%, 75%)' }}>
          80
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(90, 100%, 75%)' }}>
          90
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(100, 100%, 75%)' }}
        >
          100
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(110, 100%, 75%)' }}
        >
          110
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(120, 100%, 75%)' }}
        >
          120 Green
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(130, 100%, 75%)' }}
        >
          130
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(140, 100%, 75%)' }}
        >
          140
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(150, 100%, 75%)' }}
        >
          150
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(160, 100%, 75%)' }}
        >
          160
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(170, 100%, 75%)' }}
        >
          170
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(180, 100%, 75%)' }}
        >
          180
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(190, 100%, 75%)' }}
        >
          190
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(200, 100%, 75%)' }}
        >
          200
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(210, 100%, 75%)' }}
        >
          210
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(220, 100%, 75%)' }}
        >
          220
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(230, 100%, 75%)' }}>
          230
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(240, 100%, 75%)' }}>
          240 Blue
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(0, 100%, 50%)' }}>
          0 Red
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(10, 100%, 50%)' }}>
          10
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(20, 100%, 50%)' }}>
          20
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(30, 100%, 50%)' }}>
          30
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(40, 100%, 50%)' }}>
          40
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(50, 100%, 50%)' }}>
          50
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(60, 100%, 50%)' }}>
          60 Yellow
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(70, 100%, 50%)' }}>
          70
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(80, 100%, 50%)' }}>
          80
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(90, 100%, 50%)' }}>
          90
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(100, 100%, 50%)' }}
        >
          100
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(110, 100%, 50%)' }}
        >
          110
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(120, 100%, 50%)' }}
        >
          120 Green
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(130, 100%, 50%)' }}
        >
          130
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(140, 100%, 50%)' }}
        >
          140
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(150, 100%, 50%)' }}
        >
          150
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(160, 100%, 50%)' }}
        >
          160
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(170, 100%, 50%)' }}
        >
          170
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(180, 100%, 50%)' }}
        >
          180
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(190, 100%, 50%)' }}
        >
          190
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(200, 100%, 50%)' }}>
          200
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(210, 100%, 50%)' }}>
          210
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(220, 100%, 50%)' }}>
          220
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(230, 100%, 50%)' }}>
          230
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(240, 100%, 50%)' }}>
          240 Blue
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(0, 100%, 25%)' }}>
          0 Red
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(10, 100%, 25%)' }}>
          10
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(20, 100%, 25%)' }}>
          20
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(30, 100%, 25%)' }}>
          30
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(40, 100%, 25%)' }}>
          40
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(50, 100%, 25%)' }}>
          50
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(60, 100%, 25%)' }}>
          60 Yellow
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(70, 100%, 25%)' }}>
          70
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(80, 100%, 25%)' }}>
          80
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(90, 100%, 25%)' }}>
          90
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(100, 100%, 25%)' }}>
          100
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(110, 100%, 25%)' }}>
          110
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(120, 100%, 25%)' }}>
          120 Green
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(130, 100%, 25%)' }}>
          130
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(140, 100%, 25%)' }}>
          140
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(150, 100%, 25%)' }}>
          150
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(160, 100%, 25%)' }}>
          160
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(170, 100%, 25%)' }}>
          170
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(180, 100%, 25%)' }}>
          180
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(190, 100%, 25%)' }}>
          190
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(200, 100%, 25%)' }}>
          200
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(210, 100%, 25%)' }}>
          210
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(220, 100%, 25%)' }}>
          220
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(230, 100%, 25%)' }}>
          230
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(240, 100%, 25%)' }}>
          240 Blue
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(120, 100%, 50%)' }}
        >
          120 Green
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(130, 100%, 50%)' }}
        >
          130
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(140, 100%, 50%)' }}
        >
          140
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(150, 100%, 50%)' }}
        >
          150
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(160, 100%, 50%)' }}
        >
          160
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(170, 100%, 50%)' }}
        >
          170
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(180, 100%, 50%)' }}
        >
          180
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(190, 100%, 50%)' }}
        >
          190
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(200, 100%, 50%)' }}>
          200
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(210, 100%, 50%)' }}>
          210
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(220, 100%, 50%)' }}>
          220
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(230, 100%, 50%)' }}>
          230
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(240, 100%, 50%)' }}>
          240 Blue
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(250, 100%, 50%)' }}>
          250
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(260, 100%, 50%)' }}>
          260
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(270, 100%, 50%)' }}>
          270
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(280, 100%, 50%)' }}>
          280
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(290, 100%, 50%)' }}>
          290
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(300, 100%, 50%)' }}>
          300
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(310, 100%, 50%)' }}>
          310
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(320, 100%, 50%)' }}>
          320
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(330, 100%, 50%)' }}>
          330
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(340, 100%, 50%)' }}>
          340
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(350, 100%, 50%)' }}>
          350
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(0, 100%, 50%)' }}>
          0 Red
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(240, 100%, 50%)' }}>
          240 Blue
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(250, 100%, 50%)' }}>
          250
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(260, 100%, 50%)' }}>
          260
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(270, 100%, 50%)' }}>
          270
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(280, 100%, 50%)' }}>
          280
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(290, 100%, 50%)' }}>
          290
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(300, 100%, 50%)' }}>
          300
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(310, 100%, 50%)' }}>
          310
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(320, 100%, 50%)' }}>
          320
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(330, 100%, 50%)' }}>
          330
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(340, 100%, 50%)' }}>
          340
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(350, 100%, 50%)' }}>
          350
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(0, 100%, 50%)' }}>
          0 Red
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(10, 100%, 50%)' }}>
          10
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(20, 100%, 50%)' }}>
          20
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(30, 100%, 50%)' }}>
          30
        </div>
        <div className="color-box-slim" style={{ backgroundColor: 'hsl(40, 100%, 50%)' }}>
          40
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(50, 100%, 50%)' }}>
          50
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(60, 100%, 50%)' }}>
          60 Yellow
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(70, 100%, 50%)' }}>
          70
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(80, 100%, 50%)' }}>
          80
        </div>
        <div className="color-box-slim-dark-font" style={{ backgroundColor: 'hsl(90, 100%, 50%)' }}>
          90
        </div>{' '}
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(100, 100%, 50%)' }}
        >
          100
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(110, 100%, 50%)' }}
        >
          110
        </div>
        <div
          className="color-box-slim-dark-font"
          style={{ backgroundColor: 'hsl(120, 100%, 50%)' }}
        >
          120 Green
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 50%)' }}>
          hsl(0, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 75%, 50%)' }}>
          hsl(0, 75%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 50%, 50%)' }}>
          hsl(0, 50%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 25%, 50%)' }}>
          hsl(0, 25%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 0%, 50%)' }}>
          hsl(0, 0%, 50%)
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(0, 100%, 90%)' }}>
          hsl(0, 100%, 90%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 75%)' }}>
          hsl(0, 100%, 75%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 50%)' }}>
          hsl(0, 100%, 50%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 25%)' }}>
          hsl(0, 100%, 25%)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 1%)' }}>
          hsl(0, 100%, 1%)
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(0, 100%, 50%, 0.1)' }}>
          hsl(0, 100%, 50%, 0.1)
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(0, 100%, 50%, 0.2)' }}>
          hsl(0, 100%, 50%, 0.2)
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(0, 100%, 50%, 0.3)' }}>
          hsl(0, 100%, 50%, 0.3)
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: 'hsl(0, 100%, 50%, 0.4)' }}>
          hsl(0, 100%, 50%, 0.4)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 50%, 0.5)' }}>
          hsl(0, 100%, 50%, 0.5)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 50%, 0.6)' }}>
          hsl(0, 100%, 50%, 0.6)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 50%, 0.7)' }}>
          hsl(0, 100%, 50%, 0.7)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 50%, 0.8)' }}>
          hsl(0, 100%, 50%, 0.8)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 50%, 0.9)' }}>
          hsl(0, 100%, 50%, 0.9)
        </div>
        <div className="color-box" style={{ backgroundColor: 'hsl(0, 100%, 50%, 1)' }}>
          hsl(0, 100%, 50%, 1)
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#ff0000' }}>
          #ff0000
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff1111' }}>
          #ff1111
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff2222' }}>
          #ff2222
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff3333' }}>
          #ff3333
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff4444' }}>
          #ff4444
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff5555' }}>
          #ff5555
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff6666' }}>
          #ff6666
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff7777' }}>
          #ff7777
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff8888' }}>
          #ff8888
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff9999' }}>
          #ff9999
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,0,0)' }}>
          rgb(255,0,0)
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,17,17)' }}>
          rgb(255,17,17)
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,34,34)' }}>
          rgb(255,34,34)
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,51,51)' }}>
          rgb(255,51,51)
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,68,68)' }}>
          rgb(255,68,68)
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,85,85)' }}>
          rgb(255,85,85)
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,102,102)' }}>
          rgb(255,102,102)
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,119,119)' }}>
          rgb(255,119,119)
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,136,136)' }}>
          rgb(255,136,136)
        </div>
        <div className="color-box" style={{ backgroundColor: 'rgb(255,153,153)' }}>
          rgb(255,153,153)
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#ff0000aa' }}>
          #ff0000aa
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff000099' }}>
          #ff000099
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff000088' }}>
          #ff000088
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff000077' }}>
          #ff000077
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff000066' }}>
          #ff000066
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: '#ff000055' }}>
          #ff000055
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: '#ff000044' }}>
          #ff000044
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: '#ff000033' }}>
          #ff000033
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: '#ff000022' }}>
          #ff000022
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: '#ff000011' }}>
          #ff000011
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#ff0100' }}>
          #ff0100
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff0200' }}>
          #ff0200
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff0300' }}>
          #ff0300
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff0400' }}>
          #ff0400
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff0500' }}>
          #ff0500
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff0600' }}>
          #ff0600
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff0700' }}>
          #ff0700
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff0800' }}>
          #ff0800
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff0900' }}>
          #ff0900
        </div>
        <div className="color-box" style={{ backgroundColor: '#ff0a00' }}>
          #ff0a00
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#00ff00' }}>
          #00ff00
        </div>
        <div className="color-box" style={{ backgroundColor: '#11ff11' }}>
          #11ff11
        </div>
        <div className="color-box" style={{ backgroundColor: '#22ff22' }}>
          #22ff22
        </div>
        <div className="color-box" style={{ backgroundColor: '#33ff33' }}>
          #33ff33
        </div>
        <div className="color-box" style={{ backgroundColor: '#44ff44' }}>
          #44ff44
        </div>
        <div className="color-box" style={{ backgroundColor: '#55ff55' }}>
          #55ff55
        </div>
        <div className="color-box" style={{ backgroundColor: '#66ff66' }}>
          #66ff66
        </div>
        <div className="color-box" style={{ backgroundColor: '#77ff77' }}>
          #77ff77
        </div>
        <div className="color-box" style={{ backgroundColor: '#88ff88' }}>
          #88ff88
        </div>
        <div className="color-box" style={{ backgroundColor: '#99ff99' }}>
          #99ff99
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#0000ff' }}>
          #0000ff
        </div>
        <div className="color-box" style={{ backgroundColor: '#1111ff' }}>
          #1111ff
        </div>
        <div className="color-box" style={{ backgroundColor: '#2222ff' }}>
          #2222ff
        </div>
        <div className="color-box" style={{ backgroundColor: '#3333ff' }}>
          #3333ff
        </div>
        <div className="color-box" style={{ backgroundColor: '#4444ff' }}>
          #4444ff
        </div>
        <div className="color-box" style={{ backgroundColor: '#5555ff' }}>
          #5555ff
        </div>
        <div className="color-box" style={{ backgroundColor: '#6666ff' }}>
          #6666ff
        </div>
        <div className="color-box" style={{ backgroundColor: '#7777ff' }}>
          #7777ff
        </div>
        <div className="color-box" style={{ backgroundColor: '#8888ff' }}>
          #8888ff
        </div>
        <div className="color-box" style={{ backgroundColor: '#9999ff' }}>
          #9999ff
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#000000' }}>
          #000000
        </div>
        <div className="color-box" style={{ backgroundColor: '#111111' }}>
          #111111
        </div>
        <div className="color-box" style={{ backgroundColor: '#222222' }}>
          #222222
        </div>
        <div className="color-box" style={{ backgroundColor: '#333333' }}>
          #333333
        </div>
        <div className="color-box" style={{ backgroundColor: '#444444' }}>
          #444444
        </div>
        <div className="color-box" style={{ backgroundColor: '#555555' }}>
          #555555
        </div>
        <div className="color-box" style={{ backgroundColor: '#666666' }}>
          #666666
        </div>
        <div className="color-box" style={{ backgroundColor: '#777777' }}>
          #777777
        </div>
        <div className="color-box" style={{ backgroundColor: '#888888' }}>
          #888888
        </div>
        <div className="color-box" style={{ backgroundColor: '#999999' }}>
          #999999
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#a3a3a3' }}>
          #a3a3a3
        </div>
        <div className="color-box" style={{ backgroundColor: '#a2a2a2' }}>
          #a2a2a2
        </div>
        <div className="color-box" style={{ backgroundColor: '#a1a1a1' }}>
          #a1a1a1
        </div>
        <div className="color-box" style={{ backgroundColor: '#a0a0a0' }}>
          #a0a0a0
        </div>
        <div className="color-box" style={{ backgroundColor: '#9f9f9f' }}>
          #9f9f9f
        </div>
        <div className="color-box" style={{ backgroundColor: '#9e9e9e' }}>
          #9e9e9e
        </div>
        <div className="color-box" style={{ backgroundColor: '#9d9d9d' }}>
          #9d9d9d
        </div>
        <div className="color-box" style={{ backgroundColor: '#9c9c9c' }}>
          #9c9c9c
        </div>
        <div className="color-box" style={{ backgroundColor: '#9b9b9b' }}>
          #9b9b9b
        </div>
        <div className="color-box" style={{ backgroundColor: '#9a9a9a' }}>
          #9a9a9a
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#a4a4a4' }}>
          #a4a4a4
        </div>
        <div className="color-box" style={{ backgroundColor: '#a5a5a5' }}>
          #a5a5a5
        </div>
        <div className="color-box" style={{ backgroundColor: '#a6a6a6' }}>
          #a6a6a6
        </div>
        <div className="color-box" style={{ backgroundColor: '#a7a7a7' }}>
          #a7a7a7
        </div>
        <div className="color-box" style={{ backgroundColor: '#a8a8a8' }}>
          #a8a8a8
        </div>
        <div className="color-box" style={{ backgroundColor: '#a9a9a9' }}>
          #a9a9a9
        </div>
        <div className="color-box" style={{ backgroundColor: '#aaaaaa' }}>
          #aaaaaa
        </div>
        <div className="color-box" style={{ backgroundColor: '#ababab' }}>
          #ababab
        </div>
        <div className="color-box" style={{ backgroundColor: '#acacac' }}>
          #acacac
        </div>
        <div className="color-box" style={{ backgroundColor: '#adadad' }}>
          #adadad
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#b7b7b7' }}>
          #b7b7b7
        </div>
        <div className="color-box" style={{ backgroundColor: '#b6b6b6' }}>
          #b6b6b6
        </div>
        <div className="color-box" style={{ backgroundColor: '#b5b5b5' }}>
          #b5b5b5
        </div>
        <div className="color-box" style={{ backgroundColor: '#b4b4b4' }}>
          #b4b4b4
        </div>
        <div className="color-box" style={{ backgroundColor: '#b3b3b3' }}>
          #b3b3b3
        </div>
        <div className="color-box" style={{ backgroundColor: '#b2b2b2' }}>
          #b2b2b2
        </div>
        <div className="color-box" style={{ backgroundColor: '#b1b1b1' }}>
          #b1b1b1
        </div>
        <div className="color-box" style={{ backgroundColor: '#b0b0b0' }}>
          #b0b0b0
        </div>
        <div className="color-box" style={{ backgroundColor: '#afafaf' }}>
          #afafaf
        </div>
        <div className="color-box" style={{ backgroundColor: '#aeaeae' }}>
          #aeaeae
        </div>
      </div>
      <p>
        Hexadecimal (or hex) is base 16, not base 10 like normal numbers. It uses digits 0–9 and
        letters A–F, where: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15 So FF in hex = 15×16 + 15
        = 255 (the maximum for one colour channel).
      </p>
      <p>
        In hexadecimal (base-16) Each digit represents a power of 16, and there are 16 possible
        digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F where: A = 10 B = 11 C = 12 D = 13 E
        = 14 F = 15
      </p>
      <p>
        🧮 So for "FF" Each position is a power of 16, just like 10s and 1s in decimal: FF = (F ×
        16¹) + (F × 16⁰) Replace F with 15: FF = (15 × 16) + (15 × 1) = 240 + 15 = 255 🧩 One more
        example: "43" 43 = (4 × 16¹) + (3 × 16⁰) = (4 × 16) + (3 × 1) = 64 + 3 = 67 So when you see
        a hex pair like #43, it really means 67 out of 255 intensity for that colour channel.
      </p>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#9a9a9a' }}>
          #9a9a9a
        </div>
        <div className="color-box" style={{ backgroundColor: '#9b9b9b' }}>
          #9b9b9b
        </div>
        <div className="color-box" style={{ backgroundColor: '#9c9c9c' }}>
          #9c9c9c
        </div>
        <div className="color-box" style={{ backgroundColor: '#9d9d9d' }}>
          #9d9d9d
        </div>
        <div className="color-box" style={{ backgroundColor: '#9e9e9e' }}>
          #9e9e9e
        </div>
        <div className="color-box" style={{ backgroundColor: '#9f9f9f' }}>
          #9f9f9f
        </div>
        <div className="color-box" style={{ backgroundColor: '#a0a0a0' }}>
          #a0a0a0
        </div>
        <div className="color-box" style={{ backgroundColor: '#a1a1a1' }}>
          #a1a1a1
        </div>
        <div className="color-box" style={{ backgroundColor: '#a2a2a2' }}>
          #a2a2a2
        </div>
        <div className="color-box" style={{ backgroundColor: '#a3a3a3' }}>
          #a3a3a3
        </div>
        <div className="color-box" style={{ backgroundColor: '#888888' }}>
          #888888
        </div>
        <div className="color-box" style={{ backgroundColor: '#999999' }}>
          #999999
        </div>
        <div className="color-box-dark-font" style={{ backgroundColor: '#f9f9f9' }}>
          #f9f9f9
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="color-box" style={{ backgroundColor: '#f11111' }}>
          #F11111
        </div>
        <div className="color-box" style={{ backgroundColor: '#F21111' }}>
          #F21111
        </div>
        <div className="color-box" style={{ backgroundColor: '#F31111' }}>
          #F31111
        </div>
        <div className="color-box" style={{ backgroundColor: '#FF1111' }}>
          #FF1111
        </div>
        <div className="color-box" style={{ backgroundColor: '#555555' }}>
          #555555
        </div>
        <div className="color-box" style={{ backgroundColor: '#666666' }}>
          #666666
        </div>
        <div className="color-box" style={{ backgroundColor: '#777777' }}>
          #777777
        </div>
        <div className="color-box" style={{ backgroundColor: '#888888' }}>
          #888888
        </div>
        <div className="color-box" style={{ backgroundColor: '#999999' }}>
          #999999
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            backgroundColor: 'var(--color-blue-lighter-40)',
          }}
          className="color-box"
        >
          blue-40
        </div>{' '}
        <div
          style={{
            backgroundColor: 'var(--color-blue-lighter-25)',
          }}
          className="color-box"
        >
          blue-25
        </div>{' '}
        <div
          style={{
            backgroundColor: 'var(--color-blue-lighter-10)',
          }}
          className="color-box"
        >
          blue-10
        </div>
        <div style={{ backgroundColor: 'var(--color-blue)' }} className="color-box">
          blue
        </div>
        <div
          style={{
            backgroundColor: 'var(--color-blue-darker-10)',
          }}
          className="color-box"
        >
          blue-10
        </div>
        <div
          style={{
            backgroundColor: 'var(--color-blue-darker-25)',
          }}
          className="color-box"
        >
          blue-25
        </div>
        <div
          style={{
            backgroundColor: 'var(--color-blue-darker-40)',
          }}
          className="color-box"
        >
          blue-40
        </div>
        <div
          style={{
            backgroundColor: 'var(--color-blue-tone-10)',
          }}
          className="color-box"
        >
          blue-10
        </div>
        <div
          style={{
            backgroundColor: 'var(--color-blue-tone-25)',
          }}
          className="color-box"
        >
          blue-25
        </div>
        <div
          style={{
            backgroundColor: 'var(--color-blue-tone-40)',
          }}
          className="color-box"
        >
          blue-40
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{ backgroundColor: 'var(--color-yellow-lighter-25)' }}
          className="color-box-dark-font"
        >
          yellow 25
        </div>
        <div
          style={{ backgroundColor: 'var(--color-yellow-lighter-10)' }}
          className="color-box-dark-font"
        >
          yellow 10
        </div>
        <div style={{ backgroundColor: 'var(--color-yellow)' }} className="color-box-dark-font">
          yellow
        </div>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--color-green)', height: '25px' }}>green</div>
        <div style={{ backgroundColor: 'var(--color-red)', height: '25px' }}>red</div>
        <div style={{ backgroundColor: 'var(--color-purple)', height: '25px' }}>purple</div>
      </div>
    </>
  )
}
