import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'; // Import the Date Picker
import { BLACK, GRAYTEXT } from '../../utils/colors';
import { fp, hp, wp } from '../../utils/responsive';
import Picture from '../customComponents/Picture';
import { calender_icon } from '../../assets';

const DateBox = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(''); // State for the selected date

    const showDatePicker = () => {
        setDatePickerVisibility(true); // Show the calendar
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false); // Hide the calendar
    };

    const handleConfirm = (date) => {
        // Format the date to DD/MM/YYYY
        const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        setSelectedDate(formattedDate); // Update state with the selected date
        hideDatePicker();
    };

    return (
        <View>
            <TouchableOpacity
                onPress={showDatePicker} // Open the calendar
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderWidth: 1.5,
                    borderColor: GRAYTEXT,
                    borderRadius: wp(2),
                    marginTop: hp(1),
                    height: hp(6),
                    paddingHorizontal: wp(2.5),
                }}
            >
                <TextInput
                    style={{
                        fontSize: fp(2.2),
                        flex: 1,
                        color: BLACK,
                    }}
                    placeholder="DD/MM/YYYY"
                    value={selectedDate} // Show the selected date in the box
                    editable={false} // Make the TextInput read-only
                />
                <Picture localSource={calender_icon} height={hp(2.8)} width={wp(5.1)} />
            </TouchableOpacity>

            {/* DateTimePickerModal */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm} // Handle date selection
                onCancel={hideDatePicker} // Close the calendar
            />
        </View>
    );
};

export default DateBox;

const styles = StyleSheet.create({});
