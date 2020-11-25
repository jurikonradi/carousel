let settings = {
  elementWidthDesktop: 600,
  moveDuration: 0.35,
  longSwipe: 400,
};
//moveDuration = 0.35 seconds recomended
// longSwipe = 500ms = 0.5sec (timer works with 200ms increment: 0,200,400,600...)

export default settings;

// Explanaton:
// elementWidthDesktop -
// must be the same as 'width' value at settings.sass
// sets carousel's width on big screens (desktop, that don't use swipe possibility)

// moveDuration -
// animation duration on Desktop in seconds
