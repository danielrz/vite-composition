import { ref, computed, onMounted } from 'vue';

export default function useCounter(initialValue: number) {
  const count = ref(initialValue);

  const increment = () => {
    count.value += 1;
  };
  const decrement = () => {
    count.value -= 1;
  };
  const incrementBy = (value: number) => {
    count.value += value;
  };

  const countPow = computed(() => count.value * count.value);

  interface IDocMenu {
    heading: string;
    route: string;
    svgIcon?: string;
    items?: IDocMenu[];
  }

  const DocMenuConfig: IDocMenu[] = [
    {
      heading: 'BANKS',
      route: 'BANKS_PATH',
      svgIcon: "/media/icons/duotone/Shopping/ATM.svg",
    },
    {
      heading: 'EMPLOYERS',
      route: "/employers",
      svgIcon: "/media/icons/duotone/Home/Building.svg",
    },
  ];

  onMounted(() => console.log('useCounter mounted'));

  return {
    count,
    countPow,
    increment,
    decrement,
    incrementBy,
    DocMenuConfig,
  };
}
