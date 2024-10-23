import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../toolkit/counterSlice';
import { multiThemeColor } from '../../utils/constant';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:multiThemeColor().main_background }}>
      <Text style={{ fontSize: 32 }}>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />

        <Text style={{fontFamily:"RobotoCondensed-ThinItalic"}}>Hello</Text>
        <Text style={{fontFamily:"RobotoCondensed-SemiBoldItalic"}}>Hello</Text>
        <Text >Hello</Text>
    </View>
  );
};

export default Counter;
