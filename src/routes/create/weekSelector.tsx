import { component$, $, type Signal } from '@builder.io/qwik';

interface WeekSelectorProps {
  weekStart: Signal<Date>;
}

export const WeekSelector = component$((props: WeekSelectorProps) => {
  const goBackOneWeek = $(() => {
    props.weekStart.value = new Date(
      props.weekStart.value.getTime() - 604800000
    );
  });

  const goForwardOneWeek = $(() => {
    props.weekStart.value = new Date(
      props.weekStart.value.getTime() + 604800000
    );
  });

  return (
    <div class="drac-box drac-d-flex" style="align-items: center; gap: 10px">
      <button class="drac-btn drac-bg-purple" onClick$={goBackOneWeek}>
        &lt;
      </button>
      <span class="drac-text drac-text-white drac-line-height">
        Week beginning {props.weekStart.value.toDateString()}
      </span>
      <button class="drac-btn drac-bg-purple" onClick$={goForwardOneWeek}>
        &gt;
      </button>
    </div>
  );
});
