function downloadURI(uri, name) {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

useEffect(() => {
  if (stageRef.current) {
    const stage = stageRef.current.getStage();
    const sangria = stageRef.current.getStage().findOne('#linha-sangria');

    setHandleSave(() => {
      return () => {
        sangria.remove();
        const dataURL = stage.toDataURL({ pixelRatio: 1.6796875 });
        const art = changeDpiDataUrl(dataURL, 300);
        downloadURI(art, 'teste.jpg');
      };
    });
  }
}, [setHandleSave]);
