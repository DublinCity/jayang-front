declare const kakao: {
  maps: {
    LatLng: {
      new (lat: number, alt:number): any
    },
    Map: {
      new (target: HTMLElement| null, options: {
        center: any;
        level: number;
      }):any;
    },
    Marker: {
      new ({ position, map }: {position: kakao.maps.LatLng, map: kakao.maps.Map }): any;
  }
  }
}; 
