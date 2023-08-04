import {AudiotrackRounded, SettingsRounded, YouTube} from '@mui/icons-material'
import {Button, Card, Container, Link, Text} from '@nextui-org/react'
import Head from 'next/head'
import {useEffect, useState} from 'react'
import {getData, IData} from '../utils/data'

const Home = (_props: any) => {
    const [data, setData] = useState<IData | null>(null)

    useEffect(() => {
	    getData().then(res => {
		    setData(res);
		    if (res.redirect?.length) window.location.href = res.redirect;
	    })
    }, [])

    return (
        <Container>
            <Head>
                <title>Discord Music Bot</title>
            </Head>
            <Container css={ {
                display: 'flex',
                alignItems: 'center',
                background: '$gray50',
                position: 'fixed',
                padding: '20px',
                minWidth: '100%',
                left: '0',
                top: '0',
                zIndex: '$5'
            } }>
                <Link css={ {fontSize: '$xl', fontWeight: '$semibold'} } href='/'>
                    { data ? data.name : "Discord Music Bot" }
                </Link>
                <Link color='text' css={ {fontSize: '$lg', fontWeight: '$medium', marginLeft: '20px'} } href='#'>
                    Home
                </Link>
                <Link color='text' css={ {fontSize: '$lg', fontWeight: '$medium', marginLeft: '20px'} }
                      href='#features'>
                    Tính năng
                </Link>
                <Button onClick={ () => window.location.pathname = '/dashboard' } css={ {marginLeft: 'auto'} } auto shadow>
                    Dashboard
                </Button>
            </Container>
            <Container style={ {
                textAlign: 'center',
                marginTop: '1rem',
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            } }>
                <Text h1 css={ {textGradient: "180deg, $blue600 -20%, $blue800 100%",} }>Discord Music Bot</Text>
                <Text h3 css={ {color: '$gray800'} }>Một BOT âm nhạc discord nâng cao, hỗ trợ Spotify, SoundCloud, YouTube và có Web Dashboard</Text>
                <Container css={ {display: 'flex', alignItems: 'center', justifyContent: 'center'} }>
                    <Button color="primary" onClick={ () => window.location.pathname = '/login' } shadow style={ {
                        marginTop: '1rem'
                    } }>Đăng nhập
                    </Button>
                    <Button color="primary" flat
                            onClick={ () => window.open('https://github.com/SudhanPlayz/Discord-MusicBot') } style={ {
                        marginTop: '1rem',
                        marginLeft: '20px'
                    } }>Github
                    </Button>
                </Container>
            </Container>
            <Container css={ {display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh'} }>
                <Text h2>Tính năng</Text>
                <Container css={ {display: 'flex', justifyContent: 'center', flexWrap: 'wrap'} }>
                    <Card isHoverable css={ {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '10px',
                        width: '300px',
                        padding: '20px',
                        textAlign: 'center'
                    } }>
                        <YouTube style={ {fontSize: '150px', color: '#3694FF'} }/>
                        <Text h3>Hỗ trợ Spotify, Soundcloud và Youtube</Text>
                        <Text css={ {color: '$gray800'} }>
                            Sử dụng spotify playlist, youtube videos, youtube playlists
                            của bạn và nhiều hơn nữa.
                        </Text>
                    </Card>
                    <Card isHoverable css={ {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '10px',
                        width: '300px',
                        padding: '20px',
                        textAlign: 'center'
                    } }>
                        <AudiotrackRounded style={ {fontSize: '150px', color: '#3694FF'} }/>
                        <Text h3>No LAG</Text>
                        <Text css={ {color: '$gray800'} }>
                            BOT sẽ không bao giờ LAG khi phát nhạc trong kênh thoại.
                        </Text>
                    </Card>
                    <Card isHoverable css={ {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '10px',
                        width: '300px',
                        padding: '20px',
                        textAlign: 'center'
                    } }>
                        <SettingsRounded style={ {fontSize: '150px', color: '#3694FF'} }/>
                        <Text h3>Thiệt lập</Text>
                        <Text css={ {color: '$gray800'} }>
                            Dễ dàng điều khiển bài hát của bạn với nhiều lệnh ứng dụng.
                        </Text>
                    </Card>
                </Container>
            </Container>
            <Container css={ {
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '60vh'
            } }>
                <Text h2>Chần chừ gì nữa?</Text>
                <Button shadow size={ 'md' } css={ {marginTop: '5em'} }>Bắt đầu ngay!</Button>
            </Container>
        </Container>
    )
}


export default Home 
