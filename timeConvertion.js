function timeConvertion (s){
        const [horas, minutos, segundos, periodo] = s.split(':');
        let horaNumero = Number(horas);
      
        if (periodo === 'PM' && horaNumero !== 12) {
          horaNumero += 12;
        } else if (periodo === 'AM' && horaNumero === 12) {
          horaNumero = 0;
        }
      
    
        let horaFormatada = horaNumero.toString();
        if (horaFormatada.length === 1) {
          horaFormatada = '0' + horaFormatada;
        }
      
        return `${horaFormatada}:${minutos}:${segundos}`;
      }
    


 