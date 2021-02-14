<template>
    <div class="contact-component">
        <button-component propsWidth="110px">
            <template v-slot:contact>
                <div class="contact-icon">
                    <a href="https://github.com/abc820219">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100001831706318">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/hamu0219/">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </template>
        </button-component>
    </div>
</template>

<script>
import Button from '@/components/Button'
export default {
    name: 'contact-component',
    components: {
        'button-component': Button,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.contact-component {
    @include psa(initial, 20px, 63px, initial);
    position: fixed;
    .contact-icon {
        position: absolute;
        font-size: 24px;
        line-height: 40px;
        z-index: 2;
        a {
            color: $light;
        }
        i {
            margin-left: 10px;
        }
    }
}
</style>
