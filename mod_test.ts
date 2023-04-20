import { assertEquals } from './deps_test.ts';
import { decode } from './mod.ts';

Deno.test('test decode function', async (t) => {
	const encodedPolyline =
		'yzciG}|vVAVCrACn@AHjBrAHDn@ZBBBALGDnAD~B?FAH?\\Ab@CRE\\A@Kl@s@nDAD]dBBF@F`@|A@BtAbGDJ??EKuAcGACa@}AABGCKECCCHC??AAGAAYOAG?I?O?q@AGCGCCGEEAg@v@IMOVA_@?WWQCEGu@EYc@IOCBs@J_D@K?K@IE?GAK?HeBF_BD}AIAA?g@C??f@B@?H@DmA@I?K@O@YHEJEvB_AAd@????';

	await t.step('decode, default output', () => {
		const expected = [[
			43.60637,
			3.89087,
		], [
			43.60638,
			3.89075,
		], [
			43.6064,
			3.89033,
		], [
			43.60642,
			3.89009,
		], [
			43.60643,
			3.89004,
		], [
			43.60589,
			3.88962,
		], [
			43.60584,
			3.88959,
		], [
			43.6056,
			3.88945,
		], [
			43.60558,
			3.88943,
		], [
			43.60556,
			3.88944,
		], [
			43.60549,
			3.88948,
		], [
			43.60546,
			3.88908,
		], [
			43.60543,
			3.88844,
		], [
			43.60543,
			3.8884,
		], [
			43.60544,
			3.88835,
		], [
			43.60544,
			3.8882,
		], [
			43.60545,
			3.88802,
		], [
			43.60547,
			3.88792,
		], [
			43.6055,
			3.88777,
		], [
			43.60551,
			3.88776,
		], [
			43.60557,
			3.88753,
		], [
			43.60583,
			3.88665,
		], [
			43.60584,
			3.88662,
		], [
			43.60599,
			3.88611,
		], [
			43.60597,
			3.88607,
		], [
			43.60596,
			3.88603,
		], [
			43.60579,
			3.88556,
		], [
			43.60578,
			3.88554,
		], [
			43.60535,
			3.88424,
		], [
			43.60532,
			3.88418,
		], [
			43.60532,
			3.88418,
		], [
			43.60535,
			3.88424,
		], [
			43.60578,
			3.88554,
		], [
			43.60579,
			3.88556,
		], [
			43.60596,
			3.88603,
		], [
			43.60597,
			3.88601,
		], [
			43.60601,
			3.88603,
		], [
			43.60607,
			3.88606,
		], [
			43.60609,
			3.88608,
		], [
			43.60611,
			3.88603,
		], [
			43.60613,
			3.88603,
		], [
			43.60613,
			3.88604,
		], [
			43.60614,
			3.88608,
		], [
			43.60615,
			3.88609,
		], [
			43.60628,
			3.88617,
		], [
			43.60629,
			3.88621,
		], [
			43.60629,
			3.88626,
		], [
			43.60629,
			3.88634,
		], [
			43.60629,
			3.88659,
		], [
			43.6063,
			3.88663,
		], [
			43.60632,
			3.88667,
		], [
			43.60634,
			3.88669,
		], [
			43.60638,
			3.88672,
		], [
			43.60641,
			3.88673,
		], [
			43.60661,
			3.88645,
		], [
			43.60666,
			3.88652,
		], [
			43.60674,
			3.8864,
		], [
			43.60675,
			3.88656,
		], [
			43.60675,
			3.88668,
		], [
			43.60687,
			3.88677,
		], [
			43.60689,
			3.8868,
		], [
			43.60693,
			3.88707,
		], [
			43.60696,
			3.8872,
		], [
			43.60714,
			3.88725,
		], [
			43.60722,
			3.88727,
		], [
			43.6072,
			3.88753,
		], [
			43.60714,
			3.88833,
		], [
			43.60713,
			3.88839,
		], [
			43.60713,
			3.88845,
		], [
			43.60712,
			3.8885,
		], [
			43.60715,
			3.8885,
		], [
			43.60719,
			3.88851,
		], [
			43.60725,
			3.88851,
		], [
			43.6072,
			3.88902,
		], [
			43.60716,
			3.8895,
		], [
			43.60713,
			3.88997,
		], [
			43.60718,
			3.88998,
		], [
			43.60719,
			3.88998,
		], [
			43.60739,
			3.89,
		], [
			43.60739,
			3.89,
		], [
			43.60719,
			3.88998,
		], [
			43.60718,
			3.88998,
		], [
			43.60713,
			3.88997,
		], [
			43.6071,
			3.89036,
		], [
			43.60709,
			3.89041,
		], [
			43.60709,
			3.89047,
		], [
			43.60708,
			3.89055,
		], [
			43.60707,
			3.89068,
		], [
			43.60702,
			3.89071,
		], [
			43.60696,
			3.89074,
		], [
			43.60636,
			3.89106,
		], [
			43.60637,
			3.89087,
		], [
			43.60637,
			3.89087,
		], [
			43.60637,
			3.89087,
		]];

		assertEquals(decode(encodedPolyline), expected);
	});

	await t.step('decode, custom output', () => {
		const expected = [
			{
				latitude: 43.60637,
				longitude: 3.89087,
			},
			{
				latitude: 43.60638,
				longitude: 3.89075,
			},
			{
				latitude: 43.6064,
				longitude: 3.89033,
			},
			{
				latitude: 43.60642,
				longitude: 3.89009,
			},
			{
				latitude: 43.60643,
				longitude: 3.89004,
			},
			{
				latitude: 43.60589,
				longitude: 3.88962,
			},
			{
				latitude: 43.60584,
				longitude: 3.88959,
			},
			{
				latitude: 43.6056,
				longitude: 3.88945,
			},
			{
				latitude: 43.60558,
				longitude: 3.88943,
			},
			{
				latitude: 43.60556,
				longitude: 3.88944,
			},
			{
				latitude: 43.60549,
				longitude: 3.88948,
			},
			{
				latitude: 43.60546,
				longitude: 3.88908,
			},
			{
				latitude: 43.60543,
				longitude: 3.88844,
			},
			{
				latitude: 43.60543,
				longitude: 3.8884,
			},
			{
				latitude: 43.60544,
				longitude: 3.88835,
			},
			{
				latitude: 43.60544,
				longitude: 3.8882,
			},
			{
				latitude: 43.60545,
				longitude: 3.88802,
			},
			{
				latitude: 43.60547,
				longitude: 3.88792,
			},
			{
				latitude: 43.6055,
				longitude: 3.88777,
			},
			{
				latitude: 43.60551,
				longitude: 3.88776,
			},
			{
				latitude: 43.60557,
				longitude: 3.88753,
			},
			{
				latitude: 43.60583,
				longitude: 3.88665,
			},
			{
				latitude: 43.60584,
				longitude: 3.88662,
			},
			{
				latitude: 43.60599,
				longitude: 3.88611,
			},
			{
				latitude: 43.60597,
				longitude: 3.88607,
			},
			{
				latitude: 43.60596,
				longitude: 3.88603,
			},
			{
				latitude: 43.60579,
				longitude: 3.88556,
			},
			{
				latitude: 43.60578,
				longitude: 3.88554,
			},
			{
				latitude: 43.60535,
				longitude: 3.88424,
			},
			{
				latitude: 43.60532,
				longitude: 3.88418,
			},
			{
				latitude: 43.60532,
				longitude: 3.88418,
			},
			{
				latitude: 43.60535,
				longitude: 3.88424,
			},
			{
				latitude: 43.60578,
				longitude: 3.88554,
			},
			{
				latitude: 43.60579,
				longitude: 3.88556,
			},
			{
				latitude: 43.60596,
				longitude: 3.88603,
			},
			{
				latitude: 43.60597,
				longitude: 3.88601,
			},
			{
				latitude: 43.60601,
				longitude: 3.88603,
			},
			{
				latitude: 43.60607,
				longitude: 3.88606,
			},
			{
				latitude: 43.60609,
				longitude: 3.88608,
			},
			{
				latitude: 43.60611,
				longitude: 3.88603,
			},
			{
				latitude: 43.60613,
				longitude: 3.88603,
			},
			{
				latitude: 43.60613,
				longitude: 3.88604,
			},
			{
				latitude: 43.60614,
				longitude: 3.88608,
			},
			{
				latitude: 43.60615,
				longitude: 3.88609,
			},
			{
				latitude: 43.60628,
				longitude: 3.88617,
			},
			{
				latitude: 43.60629,
				longitude: 3.88621,
			},
			{
				latitude: 43.60629,
				longitude: 3.88626,
			},
			{
				latitude: 43.60629,
				longitude: 3.88634,
			},
			{
				latitude: 43.60629,
				longitude: 3.88659,
			},
			{
				latitude: 43.6063,
				longitude: 3.88663,
			},
			{
				latitude: 43.60632,
				longitude: 3.88667,
			},
			{
				latitude: 43.60634,
				longitude: 3.88669,
			},
			{
				latitude: 43.60638,
				longitude: 3.88672,
			},
			{
				latitude: 43.60641,
				longitude: 3.88673,
			},
			{
				latitude: 43.60661,
				longitude: 3.88645,
			},
			{
				latitude: 43.60666,
				longitude: 3.88652,
			},
			{
				latitude: 43.60674,
				longitude: 3.8864,
			},
			{
				latitude: 43.60675,
				longitude: 3.88656,
			},
			{
				latitude: 43.60675,
				longitude: 3.88668,
			},
			{
				latitude: 43.60687,
				longitude: 3.88677,
			},
			{
				latitude: 43.60689,
				longitude: 3.8868,
			},
			{
				latitude: 43.60693,
				longitude: 3.88707,
			},
			{
				latitude: 43.60696,
				longitude: 3.8872,
			},
			{
				latitude: 43.60714,
				longitude: 3.88725,
			},
			{
				latitude: 43.60722,
				longitude: 3.88727,
			},
			{
				latitude: 43.6072,
				longitude: 3.88753,
			},
			{
				latitude: 43.60714,
				longitude: 3.88833,
			},
			{
				latitude: 43.60713,
				longitude: 3.88839,
			},
			{
				latitude: 43.60713,
				longitude: 3.88845,
			},
			{
				latitude: 43.60712,
				longitude: 3.8885,
			},
			{
				latitude: 43.60715,
				longitude: 3.8885,
			},
			{
				latitude: 43.60719,
				longitude: 3.88851,
			},
			{
				latitude: 43.60725,
				longitude: 3.88851,
			},
			{
				latitude: 43.6072,
				longitude: 3.88902,
			},
			{
				latitude: 43.60716,
				longitude: 3.8895,
			},
			{
				latitude: 43.60713,
				longitude: 3.88997,
			},
			{
				latitude: 43.60718,
				longitude: 3.88998,
			},
			{
				latitude: 43.60719,
				longitude: 3.88998,
			},
			{
				latitude: 43.60739,
				longitude: 3.89,
			},
			{
				latitude: 43.60739,
				longitude: 3.89,
			},
			{
				latitude: 43.60719,
				longitude: 3.88998,
			},
			{
				latitude: 43.60718,
				longitude: 3.88998,
			},
			{
				latitude: 43.60713,
				longitude: 3.88997,
			},
			{
				latitude: 43.6071,
				longitude: 3.89036,
			},
			{
				latitude: 43.60709,
				longitude: 3.89041,
			},
			{
				latitude: 43.60709,
				longitude: 3.89047,
			},
			{
				latitude: 43.60708,
				longitude: 3.89055,
			},
			{
				latitude: 43.60707,
				longitude: 3.89068,
			},
			{
				latitude: 43.60702,
				longitude: 3.89071,
			},
			{
				latitude: 43.60696,
				longitude: 3.89074,
			},
			{
				latitude: 43.60636,
				longitude: 3.89106,
			},
			{
				latitude: 43.60637,
				longitude: 3.89087,
			},
			{
				latitude: 43.60637,
				longitude: 3.89087,
			},
			{
				latitude: 43.60637,
				longitude: 3.89087,
			},
		];

		assertEquals(
			decode(
				encodedPolyline,
				(latitude, longitude) => ({ latitude, longitude }),
			),
			expected,
		);
	});
});
