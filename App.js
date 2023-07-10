import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from './src/Header';
import List from './src/List';

export default function instagramApp() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Vitoria Ferreira',
      descricao:
        'Bora começar um projeto novo \n#setup #reactnative #dev #gamer',
      imgPerfil:
        'https://lh3.googleusercontent.com/pw/AIL4fc9vv6VD6t-zg8L07ziBGW-WmQnMevZaQ6D9-XdGAPG2jIhr_VwhUxENW0AlF2vfolTVnRCdKfidNfYLVjo2eSMx1kXoEnFoSAPf6Y7wZUMv8pZmR89ypSiFlrkP0jyIdxmf7yqHvj3uev_DXAfNQM3i07RrUkdXTadrhpr3ITFX2pvgwRcRDnN9ourGQaOe1xbTqwq0P6Ch0SlhX7IVicOCsRVihBtbHDsPcQsYNvcVGcSWWO0NdkpFO4hwmITHp1whAUffS-BwAJ7Ut4zxdmsfzWJmECZTe3kLfmajGLiYmDyDkTlxMUl0TMRb4Kv9Ckdr5MKWuc5Lgs5I-pnrbj5yVKgXZ-4ediEx91T7bBNtdIiL1LUacUsz6bP7M8q0ZhFbUKV6-iztIVDk26M0V7Fqt5jXv-5ahqJymMaOWMgC6sG8h7Dyil3Tbic0fbUpJXjb02VS-aghPeKHXN_hjQT5kcKFNp1vCIvQ8Y_hRlOgtu_L6Uqmo_tPkOidcI63LLwI1Y4Ly_QFCAtqM8t6o1lA4828tfe13c1BEju3zFWAQhszyJA3SxfxwtmLMUckJfo7Cgrfz8mut7ZfuD5e5EjrLydSVQsZikYQhs3RE35EHgaqsxrFw1CEiPucvFgVyNz5ba6iAQ0w_CS788IWheg_h4WR_h9Xim_NKjrZcIcY5SAE8Tf6elSCyjhho-kYcv5TM9du31q85fY0PCUZbgGcjvkZajJh_gbiN6zjmMg9RDuKH_t1SBg_bWT8kE_EIP48qAFBeYh4aSgygC1_p787ru-9nz15ENHMxDa-UWMuKnfUZB6zXUE1CV_4W68AxgawD0AQNqgTNOehaYHvy2IdFh4cGrx5Yghy2a8NHkr0i0dBBic1c1CT_MdToRwrGf_VxPucG8r84qsyuplew59-lDRzoPh9qwfeZKXxWx4MvHxk1Z4_IqVgNmElW-_4HVs_R65jkQpnp0f6GAGr3iFIxvkC41U=w720-h720-s-no?authuser=0',
      imgPublicacao:
        'https://lh3.googleusercontent.com/pw/AIL4fc90bNOE26acGzzsWGjUuzFl5SiD8u8-NKrE-2zY2oID52b2g8GbeN4x8n7xIJPa4dShAAYxuottqsaN8idZxwPeOGxwfSMrhXjYyFyp82_1Ji0mQQ5XgJ6gfZIVEyeblhkpjvtYE300IaKqkEyXHxUDWEoQXOMHjxzhjWX8l0wZUuOT-QetN4Kuuvz4c0YZ-Lxe39_3j6siIwFmcgSaRK4tmAjYMaVlR5sz3CUdaoshqXAAt3U8T3F2mBChW8FZ7az8R0V_bEXzBQVMEWZBriAzhxWXm0_vXFBSk-k59e6zOvOUaLWsEabOojJ9sUU2v9DD2P31arZYRLxuMgkq6o3mHioTKdjGJiOyausObCeii83Qhuw3sbJm0lyPAO4AjuosFDOhSSJsGFBBpk_y-n-Olug3jTnC0D6TAPRu8zIiQUTgtF3UffusTF0GOovO0n4pVFGO7m-PPokDgVriq6c50stL3KvP_urtcVwAXXT2lN1oS9D5kWTj_0Dpto9U4cZ1cx5rGKrIE_39qT2Rys6bQJxYRGxi8RcYPeqrbY9PXtUvus9h_bO4IZBkpQoEhLmhjkfvoxIBYZOXFgfa6dkhbU3dggUXbQCyECAfYBviZXg62jhr120L0UNkrf7UIGkLEjQ1blfj-Ltr_KdwkCaYZ25TB5RjwU3S436USUwT3YjJvWGmS8SrFDVsFAbINijtPJns2bTDeQiSQMOAPR7aDoIQc_qtvCEkUIqYN_BEBS-TJUZJ227GRpfnKyxD5Ct44ti7M5HUQJIesTAzhShIKNqvkeTfnwhlutQR_o32jg_JPGFatBQ1caGd37ol5UpcuMatinrLS2bw4br1aTGr8TX4SC4ZsIJG6fNDyZjniIZZ7bM7EA_EemKJyv2E4K-h8laRRaxdV0W2FlKVdJwkgxEXhN5rN21i2Z-oQA1oA_h559QxcMYVhfrXZzjdsvX5R4vQn5hJh8wOjHm6TNPqv-RSM5E=w1080-h637-s-no?authuser=0',
      likeada: true,
      likers: 140,
    },
    {
      id: '2',
      nome: 'Matheus',
      descricao: 'Isso sim é ser raiz!!! \n#meme',
      imgPerfil: 'https://sujeitoProgramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoProgramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },

    {
      id: '3',
      nome: 'Vitoria Ferreira',
      descricao: 'Nem só de código vive um programador! ',
      imgPerfil:
        'https://lh3.googleusercontent.com/pw/AIL4fc9vv6VD6t-zg8L07ziBGW-WmQnMevZaQ6D9-XdGAPG2jIhr_VwhUxENW0AlF2vfolTVnRCdKfidNfYLVjo2eSMx1kXoEnFoSAPf6Y7wZUMv8pZmR89ypSiFlrkP0jyIdxmf7yqHvj3uev_DXAfNQM3i07RrUkdXTadrhpr3ITFX2pvgwRcRDnN9ourGQaOe1xbTqwq0P6Ch0SlhX7IVicOCsRVihBtbHDsPcQsYNvcVGcSWWO0NdkpFO4hwmITHp1whAUffS-BwAJ7Ut4zxdmsfzWJmECZTe3kLfmajGLiYmDyDkTlxMUl0TMRb4Kv9Ckdr5MKWuc5Lgs5I-pnrbj5yVKgXZ-4ediEx91T7bBNtdIiL1LUacUsz6bP7M8q0ZhFbUKV6-iztIVDk26M0V7Fqt5jXv-5ahqJymMaOWMgC6sG8h7Dyil3Tbic0fbUpJXjb02VS-aghPeKHXN_hjQT5kcKFNp1vCIvQ8Y_hRlOgtu_L6Uqmo_tPkOidcI63LLwI1Y4Ly_QFCAtqM8t6o1lA4828tfe13c1BEju3zFWAQhszyJA3SxfxwtmLMUckJfo7Cgrfz8mut7ZfuD5e5EjrLydSVQsZikYQhs3RE35EHgaqsxrFw1CEiPucvFgVyNz5ba6iAQ0w_CS788IWheg_h4WR_h9Xim_NKjrZcIcY5SAE8Tf6elSCyjhho-kYcv5TM9du31q85fY0PCUZbgGcjvkZajJh_gbiN6zjmMg9RDuKH_t1SBg_bWT8kE_EIP48qAFBeYh4aSgygC1_p787ru-9nz15ENHMxDa-UWMuKnfUZB6zXUE1CV_4W68AxgawD0AQNqgTNOehaYHvy2IdFh4cGrx5Yghy2a8NHkr0i0dBBic1c1CT_MdToRwrGf_VxPucG8r84qsyuplew59-lDRzoPh9qwfeZKXxWx4MvHxk1Z4_IqVgNmElW-_4HVs_R65jkQpnp0f6GAGr3iFIxvkC41U=w720-h720-s-no?authuser=0',
      imgPublicacao:
        'https://lh3.googleusercontent.com/pw/AIL4fc_iZvSehvGX0_dbzkEbXQMGthrDPF3SPrXMqkN1aVtnlmdirL2EzUPzjh2A0RXYkBAdYlVXNvt8tbuH514LJbXAJ81L6B4VpxvgBH7-u2kq_lYet8dfrhvnKL57HWdm_1oKnUeWuLcUhuI_JhWfe0nEF1Xswcd8orqhgPuRFw0Pb7ah_zO3O68LeYHQHMPq5-fdMpa6BwU_HfGQzarRC7HevuxqdS3Hj7YJspuEXU5VRsZe44ERc20FYaT7UbMd0IAJpk_o2rqZZ_9_w3UzlYB9Og1c0WjrKiX59RnXCHf8dve2O35idQGuIhyujuOGb7Vd22ymDCidIFFNr8kqTgsnnmN7ijtyRXZHTIh1eQtmpus6chyn-QfO0TGsOXyTA-0gBCST6d7uoCUXGYaQOkXdpmlhNj93mz-w3pBEuAY4AZWyB0knF1JxwqFPeDfUH1_JrevMNJ7L2j4lCwXeHknNXqbjSRomAadCHjaSbIi6M0uV_oO3WHtQtczl3ais3yDNjJPqZ5ueNr74EyRzelZawLqvUYr02ZVttYgW_kF0xhUEWJJZh4fb1tRI0SaYE-xQSjhtCRcrL41RyxI10OSnQFCoD3RHQVBM65V1zdVxhrQT7hAkdOul6e6og6MgXVEcfkYj2ZX-3sYtGqrIrTR85AQ43YQV-GNvJw0tKIw_2AwEUjpFuh8oA99uCOeXfMJ2Mi7IdPTEXinNxswMqyQ0tllABKHol9860jqqLBIBJAf4auIsEqcZabR3X8Ub7X-QEdlc--r1FbqAuTf1nM8Uo1ULubBoOuKDtQQg4kNt29BS8_SCdDdsdVVW7GXmZcwK92Pq6dyddxuFrKMpBIKTNYb_OB3BRJgY0y2Zrf0QsYCk9CmQwvfOuAWfCcoP9VjGg_p6z1bq8L9G5vxu_ryfDWM8688QJ4B2l7ISjw3q6xO_Uzu4-ccdeHxi2su82b5PpjqEtlC7ZdmvO1zZYS4UIVhd7X0=w721-h952-s-no?authuser=0',

      likeada: false,
      likers: 103,
    },
    {
      id: '4',
      nome: 'Henrique',
      descricao: 'O caos do T.I \n#segundou ',
      imgPerfil: 'https://sujeitoProgramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoProgramador.com/instareact/foto4.png',
      likeada: false,
      likers: 139,
    },
    {
      id: '5',
      nome: 'Gabriel',
      descricao: 'Mais um dia de muitos bugs',
      imgPerfil: 'https://sujeitoProgramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoProgramador.com/instareact/foto3.png',
      likeada: true,
      likers: 93,
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={feed}
        renderItem={({item}) => <List data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
