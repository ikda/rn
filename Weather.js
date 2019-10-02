import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
	Thunderstorm: {
		iconName: "weather-lightning",
		gradient: ["#373B44", "#4286f4"],
		title: "천동번개",
		subtitle: "우르릉 쾅쾅"
	},
	Drizzle: {
		iconName: "weather-hail",
		gradient: ["#89F7FE", "#66A6FF"],
		title: "이슬비다",
		subtitle: "참이슬이야"
	},
	Rain: {
		iconName: "weather-rainy",
		gradient: ["#00C6FB", "#005BEA"],
		title: "비온다",
		subtitle: "우산 챙겨라"
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#7DE2FC", "#B9B6E5"],
		title: "눈온다",
		subtitle: "같이 눈사람 만들래?"
	},
	Atmosphere: {
		iconName: "weather-hail",
		gradient: ["#89F7FE", "#66A6FF"]
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#FF7300", "#FEF253"],
		title: "맑음",
		subtitle: "쨍하고 해뜰날"
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#D7D2CC", "#304352"],
		title: "구름낌",
		subtitle: "클라우드가 대세"
	},
	Mist: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "안개",
		subtitle: "Mist는 얼굴에 뿌려요"
	},
	Dust: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "먼지",
		subtitle: "착짱죽짱 🖕🏻"
	},
	Haze: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "물보라",
		subtitle: "Just don't go outside."
	}
};

export default function Weather({ temp, condition }) {
	return (
		<LinearGradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					size={96}
					name={weatherOptions[condition].iconName}
					color="white"
				/>
				<Text style={styles.temp}>{temp}°</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>
					{weatherOptions[condition].subtitle}
				</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm",
		"Drizzle",
		"Rain",
		"Snow",
		"Atmosphere",
		"Clear",
		"Clouds",
		"Haze",
		"Mist",
		"Dust"
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	temp: {
		fontSize: 42,
		color: "white"
	},
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 40,
		fontWeight: "300",
		marginBottom: 10,
		textAlign: "left"
	},
	subtitle: {
		fontWeight: "600",
		color: "white",
		fontSize: 24,
		textAlign: "left"
	},
	textContainer: {
		alignItems: "flex-start",
		paddingHorizontal: 40,
		justifyContent: "center",
		flex: 1
	}
});
