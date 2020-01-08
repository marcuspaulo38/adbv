
const options = [
  
  {
	key: 'GestaoDeApontamentoLabel',
	label: 'Gestão de Apontamentos',
  leftIcon: 'ion-escalar',
  children:[
    {
      key:'GestaoDeApontamento',
      label:'Apontamentos',
      leftIcon: 'ion-escalar'
    },
    {
      key: 'Aprovacao',
    	label: 'Aprovações',
      leftIcon: 'ion-escalar',
    }
  ]
  },
  {
    key:'Adm',
    label: 'Administração',
    leftIcon: 'ion-escalar',
    children:[
      {
        key: 'CentroDeCusto',
        label: 'Centro de Custo',
        leftIcon: 'ion-escalar',
      },
      {
        key: 'EscAvul',
        label: 'Escala Avulsa',
        leftIcon: 'ion-escalar',
      },
      {
        key: 'PeriodoDeFechamento',
        label: 'Periodo de Fechamento',
        leftIcon: 'ion-escalar',
      },
      {
        key: 'Usuario',
        label: 'Usuario',
        leftIcon: 'ion-escalar',
      },
      {
      key: 'Plantonista',
      label: 'Plantonista',
      leftIcon: 'ion-escalar',
      },
    ]
  }
 
  
 
];
export default options;


