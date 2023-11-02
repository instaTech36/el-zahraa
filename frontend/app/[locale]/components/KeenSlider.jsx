import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function App({images}) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: -1,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 3,
        spacing:10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
      
        {
      images.map((item, index) => {
        return (
          <div className ={`keen-slider__slide number-slide${index+1} mb-2 `} key={index}>
    
              <img
                src={images[index].image}
                alt="product image "
                className="md:w-[600px] lg:w-[1000px] md:h-[400px] rounded-lg"
              />
        
          </div>
        );
      })
      }
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
    

        {
      images.map((item, index) => {
        return (
          <div className ={`keen-slider__slide number-slide${index+1}  `} key={index}>
    
              <img
                src={images[index].image}
                alt="product image "
                className="w-full md:h-[150px]  rounded-lg"
              />
        
          </div>
        );
      })
      }
      
      </div>
    </>
  )
}
