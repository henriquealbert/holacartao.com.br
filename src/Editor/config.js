// function downloadURI(uri, name) {
//   const link = document.createElement('a');
//   link.download = name;
//   link.href = uri;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }

// useEffect(() => {
//   if (stageRef.current) {
//     const stage = stageRef.current.getStage();
//     const sangria = stageRef.current.getStage().findOne('#linha-sangria');

//     setHandleSave(() => {
//       return () => {
//         sangria.remove();
//         const dataURL = stage.toDataURL({ pixelRatio: 5.0609375 });
//         const daurl150dpi = changeDpiDataUrl(dataURL, 904);
//         downloadURI(daurl150dpi, 'teste.jpg');
//       };
//     });
//   }
// }, [setHandleSave]);
