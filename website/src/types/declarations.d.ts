declare module '@theme/ApiDoc' {
  // Adjust the component props according to the actual API
  const ApiDoc: React.ComponentType<{ layoutProps: any; specProps: any }>;
  export default ApiDoc;
}

declare module '@theme/useSpecData' {
  // Adjust the return type according to the actual data structure
  function useSpecData(specName: string): any;
  export default useSpecData;
}