import dayjs from "dayjs";
import { useState } from "react";

export const useCalender = (now) =>{
    const [selectedDate,setSelectedDate] = useState(now);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        setSelectedDate(dayjs(date));
        hideDatePicker();
      }

      const subtract1Month = () =>{
        const newSelectedDate = dayjs(selectedDate).subtract(1,'month');
        setSelectedDate(newSelectedDate);
      }
    
      const add1month = () => {
        const newSelectedDate = dayjs(selectedDate).add(1,'month');
        setSelectedDate(newSelectedDate);
      }

      return {
        selectedDate,
        setSelectedDate,
        isDatePickerVisible,
        showDatePicker,
        hideDatePicker,
        handleConfirm,
        subtract1Month,
        add1month
      }
      
}