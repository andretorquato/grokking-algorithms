package main

import "fmt"

func quicksort(arr []int) []int {
	if len(arr) < 2 {
		return arr
	} else {
		pivot := arr[0]
		left := []int{}
		right := []int{}
		for _, v := range arr[1:] {
			if v < pivot {
				left = append(left, v)
			} else {
				right = append(right, v)
			}
		}
		return append(append(quicksort(left), pivot), quicksort(right)...)
	}
}

func main() {
	arr := []int{5, 4, 2, 1}
	fmt.Println(quicksort(arr))
}
